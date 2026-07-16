/* =========================================================================
   AURAK Campus Directory — app.js
   Reads FACULTY_CSV (data/faculty.js), BUILDINGS (data/buildings.js),
   and PATH_GRAPH (data/path_graph.json), parses everything client-side,
   and renders the map + directory with A* pathfinding.
   ========================================================================= */

/* ---------------------------- CSV PARSING ------------------------------ */
// Small RFC4180-ish CSV parser: handles quoted fields with embedded commas
// and escaped quotes ("").
function parseCSV(text){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++){
    const c = text[i], next = text[i+1];
    if (inQuotes){
      if (c === '"' && next === '"'){ field += '"'; i++; }
      else if (c === '"'){ inQuotes = false; }
      else { field += c; }
    } else {
      if (c === '"'){ inQuotes = true; }
      else if (c === ','){ row.push(field); field = ''; }
      else if (c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r'){ /* skip */ }
      else { field += c; }
    }
  }
  if (field.length || row.length){ row.push(field); rows.push(row); }
  const header = rows.shift().map(h => h.trim());
  return rows.filter(r => r.length > 1 || r[0] !== '').map(r => {
    const obj = {};
    header.forEach((h, idx) => obj[h] = (r[idx] || '').trim());
    return obj;
  });
}

/* ---------------------------- DAY PARSING ------------------------------- */
const DAY_MAP = {
  mon:'Mon', monday:'Mon', mondays:'Mon',
  tue:'Tue', tues:'Tue', tuesday:'Tue', tuesdays:'Tue',
  wed:'Wed', wednesday:'Wed',
  thu:'Thu', thur:'Thu', thurs:'Thu', thursday:'Thu',
  fri:'Fri', friday:'Fri',
  sat:'Sat', saturday:'Sat', saturdays:'Sat',
  sun:'Sun', sunday:'Sun', sundays:'Sun',
};
const DAY_ORDER = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function parseDays(raw){
  if (!raw) return [];
  let s = raw.toLowerCase().replace(/\*/g,'');
  const days = [];
  s.split(/[,&/]|and/).forEach(p => {
    p = p.trim().replace(/\.$/,'').trim();
    if (DAY_MAP[p] && !days.includes(DAY_MAP[p])) days.push(DAY_MAP[p]);
  });
  const rangeRe = /(mon|tue|wed|thu|fri|sat|sun)[a-z]*\s*[-–]\s*(mon|tue|wed|thu|fri|sat|sun)[a-z]*/g;
  let m;
  while ((m = rangeRe.exec(s)) !== null){
    const a = DAY_MAP[m[1]], b = DAY_MAP[m[2]];
    if (a && b){
      const ia = DAY_ORDER.indexOf(a), ib = DAY_ORDER.indexOf(b);
      if (ia <= ib) for (let i = ia; i <= ib; i++) if (!days.includes(DAY_ORDER[i])) days.push(DAY_ORDER[i]);
    }
  }
  return days;
}

/* ---------------------------- TIME PARSING ------------------------------ */
function parseTimeRanges(raw){
  if (!raw) return [];
  let s = raw.replace(/–/g,'-').replace(/—/g,'-').replace(/\([^)]*\)/g,'');
  const ranges = [];
  s.split(',').forEach(chunk => {
    chunk = chunk.trim();
    const m = chunk.match(/(\d{1,2}:\d{2})\s*(am|pm)?\s*-\s*(\d{1,2}:\d{2})\s*(am|pm)?/i);
    if (!m) return;
    let [, h1, ap1, h2, ap2] = m;
    ap1 = ap1 || ap2; ap2 = ap2 || ap1;
    if (!ap1 || !ap2) return;
    const to24 = (hm, ap) => {
      let [h, mi] = hm.split(':').map(Number);
      ap = ap.toLowerCase();
      if (ap === 'pm' && h !== 12) h += 12;
      if (ap === 'am' && h === 12) h = 0;
      return h*60 + mi;
    };
    ranges.push({ start: to24(h1, ap1), end: to24(h2, ap2), label: chunk });
  });
  return ranges;
}

/* ------------------------- BUILDING FROM OFFICE -------------------------- */
function parseBuilding(office){
  office = (office || '').trim();
  const m = office.match(/^([A-Za-z]+)/);
  if (m && BUILDINGS[m[1].toUpperCase()]) return m[1].toUpperCase();
  const low = office.toLowerCase();
  for (const code of Object.keys(BUILDINGS)){
    if (low.includes('bldg. ' + code.toLowerCase()) || low.includes('bldg ' + code.toLowerCase())) return code;
  }
  return null;
}

function parseTitle(name){
  const m = name.match(/^(Dr\.|Prof\.|Eng\.|Ms\.|Mr\.|Mrs\.)\s+(.*)/);
  return m ? m[1] : '';
}

/* --------------------------- BUILD FACULTY LIST -------------------------- */
function buildFacultyList(rows){
  const map = new Map();
  rows.forEach(r => {
    const name = (r.faculty || '').trim();
    if (!name) return;
    if (!map.has(name)){
      map.set(name, {
        name,
        namePrefix: parseTitle(name),
        school: (r.school || '').trim(),
        department: (r.department || '').trim(),
        offices: new Set(),
        building: null,
        hours: [],
      });
    }
    const f = map.get(name);
    const office = (r.office || '').trim();
    if (office) f.offices.add(office);
    const bldg = parseBuilding(office);
    if (bldg && !f.building) f.building = bldg;
    const days = parseDays(r.day);
    const ranges = parseTimeRanges(r.time);
    if (days.length || (r.time || '').trim()){
      f.hours.push({ days, dayLabel: (r.day||'').trim(), timeLabel: (r.time||'').trim(), ranges });
    }
  });
  return [...map.values()].map(f => ({ ...f, offices: [...f.offices].sort() }))
                           .sort((a,b) => a.name.localeCompare(b.name));
}

const FACULTY = buildFacultyList(parseCSV(FACULTY_CSV));

/* ---------------------------- PATH GRAPH ------------------------------- */
// Build adjacency list from the graph for fast lookups
function buildAdjacency(nodes, edges) {
  const adj = {};
  nodes.forEach(n => adj[n.id] = []);
  edges.forEach(e => {
    adj[e.a].push(e.b);
    adj[e.b].push(e.a);
  });
  return adj;
}

// Node lookup by ID
function buildNodeMap(nodes) {
  const map = {};
  nodes.forEach(n => map[n.id] = n);
  return map;
}

// Euclidean distance between two nodes (fractional coords)
function nodeDist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx*dx + dy*dy);
}

// A* pathfinding
function aStar(startId, goalId, nodes, edges) {
  const adj = buildAdjacency(nodes, edges);
  const nodeMap = buildNodeMap(nodes);
  
  if (!nodeMap[startId] || !nodeMap[goalId]) return null;
  if (startId === goalId) return [startId];

  const openSet = new Set([startId]);
  const cameFrom = {};
  const gScore = {};
  const fScore = {};

  nodes.forEach(n => {
    gScore[n.id] = Infinity;
    fScore[n.id] = Infinity;
  });
  gScore[startId] = 0;
  fScore[startId] = nodeDist(nodeMap[startId], nodeMap[goalId]);

  while (openSet.size > 0) {
    // Find node in openSet with lowest fScore
    let current = null;
    let bestF = Infinity;
    for (const id of openSet) {
      if (fScore[id] < bestF) {
        bestF = fScore[id];
        current = id;
      }
    }

    if (current === goalId) {
      // Reconstruct path
      const path = [];
      let c = current;
      while (c) {
        path.unshift(c);
        c = cameFrom[c];
      }
      return path;
    }

    openSet.delete(current);

    for (const neighbor of adj[current] || []) {
      const tentativeG = gScore[current] + nodeDist(nodeMap[current], nodeMap[neighbor]);
      if (tentativeG < gScore[neighbor]) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeG;
        fScore[neighbor] = gScore[neighbor] + nodeDist(nodeMap[neighbor], nodeMap[goalId]);
        openSet.add(neighbor);
      }
    }
  }

  return null; // No path found
}

// Find the entrance node(s) for a building
function getEntranceNodes(buildingCode) {
  if (!PATH_GRAPH) return [];
  return PATH_GRAPH.nodes.filter(n => 
    n.type === 'entrance' && n.building === buildingCode
  );
}

// Get the closest entrance node to a given point (or building center)
function getClosestEntrance(buildingCode, targetX, targetY) {
  const entrances = getEntranceNodes(buildingCode);
  if (entrances.length === 0) return null;
  if (entrances.length === 1) return entrances[0].id;
  
  // Find closest entrance to the target point
  let closest = null;
  let closestDist = Infinity;
  for (const ent of entrances) {
    const d = Math.sqrt((ent.x - targetX)**2 + (ent.y - targetY)**2);
    if (d < closestDist) {
      closestDist = d;
      closest = ent.id;
    }
  }
  return closest;
}

// Get building center from BUILDINGS data
function getBuildingCenter(code) {
  const b = BUILDINGS[code];
  if (!b) return null;
  const pts = b.points;
  const cx = pts.reduce((s,p) => s + p.x, 0) / pts.length;
  const cy = pts.reduce((s,p) => s + p.y, 0) / pts.length;
  return { x: cx, y: cy };
}

// Find path between two buildings
function findPathBetweenBuildings(fromCode, toCode) {
  if (!PATH_GRAPH) return null;
  
  const fromCenter = getBuildingCenter(fromCode);
  const toCenter = getBuildingCenter(toCode);
  if (!fromCenter || !toCenter) return null;
  
  const fromEntrance = getClosestEntrance(fromCode, fromCenter.x, fromCenter.y);
  const toEntrance = getClosestEntrance(toCode, toCenter.x, toCenter.y);
  
  if (!fromEntrance || !toEntrance) return null;
  
  const pathIds = aStar(fromEntrance, toEntrance, PATH_GRAPH.nodes, PATH_GRAPH.edges);
  if (!pathIds) return null;
  
  // Convert node IDs to points for drawing
  const nodeMap = buildNodeMap(PATH_GRAPH.nodes);
  return pathIds.map(id => nodeMap[id]);
}

/* ------------------------------- STATE ---------------------------------- */
const SCHOOL_SHORT = {
  'School of Business': 'Business',
  'School of Engineering and Computing': 'Engineering',
  'School of Arts & Sciences': 'Arts & Sciences',
};

let state = {
  query: '',
  school: 'All',
  building: 'All',
  selectedBuilding: null,
  selectedFaculty: null,
  manualPick: false,   // true only when the user explicitly clicked a card/building/chip
  dismissed: false,    // true when the user explicitly clicked empty map space to hide the popup
  youAreHere: null,    // building code set via ?loc= in the URL (QR code entry point)
  routeFrom: null,     // active route start (usually == youAreHere)
  routeTo: null,       // active route destination
  routePath: null,     // array of {x, y} points for the current route
};

/* --------------------------- FILTER DROPDOWN ----------------------------- */
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const schoolChipsEl = document.getElementById('schoolChips');
const bldgChipsEl = document.getElementById('bldgChips');
const filterCountEl = document.getElementById('filterCount');

const schools = ['All', ...new Set(FACULTY.map(f => f.school).filter(Boolean))];
schools.forEach(s => {
  const chip = document.createElement('div');
  chip.className = 'chip' + (s === 'All' ? ' active' : '');
  chip.textContent = s === 'All' ? 'All schools' : (SCHOOL_SHORT[s] || s);
  chip.dataset.school = s;
  chip.onclick = () => { state.school = s; syncChips(); render(); };
  schoolChipsEl.appendChild(chip);
});

const bldgCodes = Object.keys(BUILDINGS);
const allBldgChip = document.createElement('div');
allBldgChip.className = 'chip active';
allBldgChip.textContent = 'All buildings';
allBldgChip.dataset.bldg = 'All';
allBldgChip.onclick = () => { state.building = 'All'; clearSelection(); syncChips(); render(); };
bldgChipsEl.appendChild(allBldgChip);
bldgCodes.forEach(code => {
  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.innerHTML = `<span class="dot" style="background:${BUILDINGS[code].color}"></span>${code}`;
  chip.title = BUILDINGS[code].name;
  chip.dataset.bldg = code;
  chip.onclick = () => { state.building = code; selectBuilding(code, null, true); syncChips(); render(); };
  bldgChipsEl.appendChild(chip);
});

function syncChips(){
  [...schoolChipsEl.children].forEach(c => c.classList.toggle('active', c.dataset.school === state.school));
  [...bldgChipsEl.children].forEach(c => c.classList.toggle('active', c.dataset.bldg === state.building));
  const activeCount = (state.school !== 'All' ? 1 : 0) + (state.building !== 'All' ? 1 : 0);
  filterCountEl.textContent = activeCount || '';
  filterCountEl.style.display = activeCount ? 'flex' : 'none';
  filterBtn.classList.toggle('active', activeCount > 0);
}

filterBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filterPanel.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!filterPanel.contains(e.target) && e.target !== filterBtn){
    filterPanel.classList.remove('open');
  }
});

/* ------------------------------ MAP LEGEND ------------------------------- */
const legendBtn = document.getElementById('legendBtn');
const legendPanel = document.getElementById('legendPanel');
bldgCodes.forEach(code => {
  const item = document.createElement('div');
  item.className = 'lg-item';
  item.innerHTML = `<span class="lg-swatch" style="background:${BUILDINGS[code].color}"></span><b>${code}</b>&nbsp;${BUILDINGS[code].name}`;
  legendPanel.appendChild(item);
});
legendBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (legendPanel.classList.contains('open')) closeLegend();
  else openLegend();
});
document.addEventListener('click', (e) => {
  if (legendPanel.classList.contains('open') && !legendPanel.contains(e.target) && e.target !== legendBtn){
    closeLegend();
  }
});
function openLegend(){
  legendPanel.classList.add('open');
  infobox.classList.remove('show');
  bldgCodes.forEach(code => {
    const poly = overlay.querySelector(`polygon[data-code="${code}"]`);
    if (!poly) return;
    poly.style.stroke = BUILDINGS[code].color;
    poly.style.fill = BUILDINGS[code].color + '33';
  });
}
function closeLegend(){
  legendPanel.classList.remove('open');
  paintPolys();
  if (state.selectedBuilding) showInfobox(state.selectedBuilding, state.selectedFaculty);
}

/* -------------------------------- MAP ------------------------------------ */
const overlay = document.getElementById('overlay');
const mapImg = document.getElementById('mapImg');
const tooltip = document.getElementById('tooltip');
const infobox = document.getElementById('infobox');

// touch devices don't have real hover -- the old hover tooltip/fill would get
// "stuck" after a tap since mouseleave never reliably fires. On these devices
// we skip the hover handlers entirely and rely on tap -> click -> info popup.
const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

let overlayH = 0; // current SVG viewBox height (1000 * image aspect ratio) -- route lines need this too

function initOverlay(){
  const ratio = mapImg.naturalHeight / mapImg.naturalWidth;
  overlayH = 1000*ratio;
  overlay.setAttribute('viewBox', `0 0 1000 ${overlayH}`);
  overlay.innerHTML = '';
  bldgCodes.forEach(code => {
    const pts = BUILDINGS[code].points.map(p => `${p.x*1000},${p.y*overlayH}`).join(' ');
    const poly = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    poly.setAttribute('points', pts);
    poly.setAttribute('class', 'bldg-poly');
    poly.dataset.code = code;
    if (!isTouchDevice){
      poly.addEventListener('mouseenter', (e) => onBldgHover(code, e));
      poly.addEventListener('mousemove', (e) => moveTooltip(e));
      poly.addEventListener('mouseleave', () => onBldgLeave(code));
    }
    poly.addEventListener('click', (e) => { e.stopPropagation(); onBldgClick(code); });
    overlay.appendChild(poly);
  });
  paintPolys();
  // the overlay is rebuilt from scratch above (innerHTML = ''), so if a route
  // was already active it needs to be redrawn on top of the fresh polys
  if (state.routePath) drawRoutePath(state.routePath);
  if (state.selectedBuilding) showInfobox(state.selectedBuilding, state.selectedFaculty);
}
mapImg.addEventListener('load', initOverlay);
if (mapImg.complete && mapImg.naturalWidth) initOverlay();

// clicking empty map area (not a building) hides the popup
document.getElementById('mapStage').addEventListener('click', () => {
  dismissSelection();
});

function onBldgHover(code, e){
  const b = BUILDINGS[code];
  const poly = overlay.querySelector(`polygon[data-code="${code}"]`);
  if (state.selectedBuilding !== code){
    poly.style.stroke = b.color;
    poly.style.fill = b.color + '22';
  }
  tooltip.textContent = `${code} — ${b.name}`;
  tooltip.classList.add('show');
  moveTooltip(e);
}
function onBldgLeave(code){
  tooltip.classList.remove('show');
  if (state.selectedBuilding !== code){
    const poly = overlay.querySelector(`polygon[data-code="${code}"]`);
    poly.style.stroke = 'transparent';
    poly.style.fill = 'transparent';
  }
}
function moveTooltip(e){
  const rect = document.getElementById('mapStage').getBoundingClientRect();
  tooltip.style.left = (e.clientX - rect.left) + 'px';
  tooltip.style.top = (e.clientY - rect.top) + 'px';
}
function onBldgClick(code){
  if (legendPanel.classList.contains('open')) legendPanel.classList.remove('open');
  state.building = code;
  selectBuilding(code, null, true);
  syncChips();
  render();
}

function paintPolys(prevCode){
  bldgCodes.forEach(code => {
    const poly = overlay.querySelector(`polygon[data-code="${code}"]`);
    if (!poly) return;
    const isSelected = state.selectedBuilding === code;
    const isRouteFrom = state.routeFrom === code;
    const isRouteTo = state.routeTo === code;
    if (isSelected || isRouteFrom || isRouteTo){
      poly.style.stroke = BUILDINGS[code].color;
      poly.style.fill = BUILDINGS[code].color + '3d';
      poly.classList.add('selected');
      poly.classList.toggle('route-from', isRouteFrom);
      poly.classList.toggle('route-to', isRouteTo);
      if (isSelected && code !== prevCode){
        poly.classList.remove('pop');
        void poly.offsetWidth; // restart animation
        poly.classList.add('pop');
      }
    } else {
      poly.style.stroke = 'transparent';
      poly.style.fill = 'transparent';
      poly.classList.remove('selected','pop','route-from','route-to');
    }
  });
}

function selectBuilding(code, faculty, manual){
  const prev = state.selectedBuilding;
  state.selectedBuilding = code;
  state.selectedFaculty = faculty;
  if (manual) state.manualPick = true;
  paintPolys(prev);
  showInfobox(code, faculty);
}
function clearSelection(){
  state.selectedBuilding = null;
  state.selectedFaculty = null;
  state.manualPick = false;
  state.dismissed = false;
  paintPolys();
  infobox.classList.remove('show');
}
// clicking empty map space: hide the popup but remember it was a deliberate
// dismissal, so the periodic refresh / auto-follow doesn't immediately bring it back
function dismissSelection(){
  state.selectedBuilding = null;
  state.selectedFaculty = null;
  state.dismissed = true;
  paintPolys();
  infobox.classList.remove('show');
}

function showInfobox(code, faculty){
  if (!code || !BUILDINGS[code]){ infobox.classList.remove('show'); return; }
  const b = BUILDINGS[code];
const pts = b.points;
const minY = Math.min(...pts.map(p=>p.y));
const avgY = pts.reduce((s,p)=>s+p.y, 0) / pts.length;
const anchorY = minY + (avgY - minY) * 0.55; // nudge anchor down from the roof apex toward the shape's center
const xs = pts.map(p=>p.x);
const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  // Position relative to #mapPane (which is never transformed), not
  // #mapStage. On mobile, #mapStage is zoomed with a CSS transform:scale(),
  // and since infobox used to live inside #mapStage, its on-screen size and
  // position both got doubly-scaled by that transform -- making it render
  // too big and land in the wrong spot. Reading the scale straight out of
  // #mapStage's computed transform keeps this correct even if that zoom
  // amount changes later.
  const mapPane = document.getElementById('mapPane');
  const stage = document.getElementById('mapStage');
  const paneRect = mapPane.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect(); // the real rendered box -- already
                                                    // reflects any CSS transform (e.g. the
                                                    // mobile zoom), so no manual scale math needed
  const left = (stageRect.left - paneRect.left) + stageRect.width * cx;
  const top = (stageRect.top - paneRect.top) + stageRect.height * anchorY;
  infobox.style.left = left + 'px';
  infobox.style.top = top + 'px';
  infobox.style.transform = ''; // reset any previous clamp before remeasuring
  const count = countFacultyInBuilding(code);

  let body;
  if (faculty){
    const avail = isAvailableNow(faculty);
    const badge = avail === 'available'
      ? `<span class="ib-badge avail"><span class="pulse"></span>Available now</span>`
      : avail === 'unavailable'
        ? `<span class="ib-badge unavail">Not available now</span>`
        : `<span class="ib-badge unavail">Hours vary</span>`;
    const hours = faculty.hours.length
      ? `<div class="ib-hours">${faculty.hours.map(h => `<div class="ib-hr"><span>${h.dayLabel || '—'}</span><span>${h.timeLabel || '—'}</span></div>`).join('')}</div>`
      : '';
    body = `<div class="ib-name">${faculty.name}</div><div class="ib-office">${faculty.offices.join(', ') || 'Office not listed'}</div>${badge}${hours}`;
  } else {
    body = count ? `<div class="ib-name">${count} faculty member${count===1?'':'s'}</div><div class="ib-office">Click a name to locate their office</div>` : '';
  }
  const hereBadge = code === state.youAreHere ? `<div class="ib-here">📍 You are here</div>` : '';
  const dirBtn = (state.youAreHere && code !== state.youAreHere)
    ? `<button class="dir-btn" id="dirBtn">Directions from here</button>` : '';
  infobox.innerHTML = `${hereBadge}<div class="ib-building">${code} · ${b.name}</div>${body}${dirBtn}`;
  infobox.classList.add('show');
  const dirBtnEl = document.getElementById('dirBtn');
  if (dirBtnEl) dirBtnEl.onclick = (e) => {
    e.stopPropagation();
    showRoute(state.youAreHere, code);
    infobox.classList.remove('show'); // hide the popup so it doesn't sit on top of the route line
  };

  // clamp horizontally so the popup never runs off the edge of a small
  // (mobile) screen -- measure after layout, then nudge it back on-screen
  requestAnimationFrame(() => {
    const boxRect = infobox.getBoundingClientRect();
    const margin = 8;
    let shift = 0;
    if (boxRect.left < margin) shift = margin - boxRect.left;
    else if (boxRect.right > paneRect.width - margin) shift = (paneRect.width - margin) - boxRect.right;
    if (shift) infobox.style.transform = `translate(calc(-50% + ${shift}px), -100%) translateY(-14px)`;
  });
}
function countFacultyInBuilding(code){ return FACULTY.filter(f => f.building === code).length; }
window.addEventListener('resize', () => { if(state.selectedBuilding) showInfobox(state.selectedBuilding, state.selectedFaculty); });

/* ---------------------------- AVAILABILITY -------------------------------- */
function nowInDubai(){
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone:'Asia/Dubai', weekday:'short', hour:'2-digit', minute:'2-digit', hour12:false });
  const parts = fmt.formatToParts(new Date());
  let weekday, hour, minute;
  parts.forEach(p => {
    if (p.type === 'weekday') weekday = p.value;
    if (p.type === 'hour') hour = parseInt(p.value,10);
    if (p.type === 'minute') minute = parseInt(p.value,10);
  });
  if (hour === 24) hour = 0;
  return { weekday, minutes: hour*60 + minute };
}
function isAvailableNow(faculty){
  const { weekday, minutes } = nowInDubai();
  let anyParsed = false;
  for (const h of faculty.hours){
    if (h.ranges.length) anyParsed = true;
    if (!h.days.includes(weekday)) continue;
    for (const r of h.ranges) if (minutes >= r.start && minutes <= r.end) return 'available';
  }
  return anyParsed ? 'unavailable' : 'unknown';
}

/* ------------------------------- DIRECTIONS -------------------------------- */
// Draw a path from A* on the map
function drawRoutePath(pathNodes) {
  removeRouteLine();
  if (!pathNodes || pathNodes.length < 2 || !overlayH) return false;
  
  const pts = pathNodes.map(p => `${p.x*1000},${p.y*overlayH}`).join(' ');
  const line = document.createElementNS('http://www.w3.org/2000/svg','polyline');
  line.setAttribute('points', pts);
  line.setAttribute('class','route-line');
  line.id = 'routeLine';
  line.style.stroke = '#4af5ff';
  overlay.appendChild(line);
  return true;
}

function removeRouteLine(){
  const old = document.getElementById('routeLine');
  if (old) old.remove();
}

const routeBarEl = document.getElementById('routeBar');
function updateRouteBar(fromCode, toCode, found){
  const fromName = BUILDINGS[fromCode].name;
  const toName = BUILDINGS[toCode].name;
  routeBarEl.innerHTML = found
    ? `<div class="rb-text"><b>${fromCode}</b> → <b>${toCode}</b><span class="rb-sub">${fromName} to ${toName}</span></div><button id="rbClear">Clear route</button>`
    : `<div class="rb-text rb-warn">No path found between ${fromCode} and ${toCode}.</div><button id="rbClear">Clear route</button>`;
  routeBarEl.classList.add('show');
  document.getElementById('rbClear').onclick = clearRoute;
}

function showRoute(fromCode, toCode){
  if (!fromCode || !toCode || !BUILDINGS[fromCode] || !BUILDINGS[toCode] || fromCode === toCode) return;
  
  // Use A* to find the path
  const pathNodes = findPathBetweenBuildings(fromCode, toCode);
  const found = pathNodes && pathNodes.length > 1;
  
  if (found) {
    state.routePath = pathNodes;
    drawRoutePath(pathNodes);
  } else {
    state.routePath = null;
    removeRouteLine();
  }
  
  state.routeFrom = fromCode;
  state.routeTo = toCode;
  paintPolys();
  updateRouteBar(fromCode, toCode, found);
}

function clearRoute(){
  state.routeFrom = null;
  state.routeTo = null;
  state.routePath = null;
  removeRouteLine();
  paintPolys();
  routeBarEl.classList.remove('show');
}

/* ------------------------- "YOU ARE HERE" VIA QR --------------------------- */
// A QR code posted at a building's entrance links to ?loc=<code>, e.g. ?loc=G.
// That auto-selects the building as both the map selection and the routing
// origin, so any "Directions from here" button elsewhere just works.
(function initLocationFromQR(){
  const params = new URLSearchParams(window.location.search);
  const loc = (params.get('loc') || '').trim().toUpperCase();
  if (loc && BUILDINGS[loc]){
    state.youAreHere = loc;
    selectBuilding(loc, null, true);
  }
})();

/* ------------------------------- SEARCH ----------------------------------- */
const searchEl = document.getElementById('search');
searchEl.addEventListener('input', () => {
  state.query = searchEl.value.trim().toLowerCase();
  state.manualPick = false;
  state.dismissed = false;
  if (state.query){
    state.school = 'All';
    state.building = 'All';
    syncChips();
  }
  render();
});
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchEl){
    e.preventDefault();
    searchEl.focus();
  }
  if (e.key === 'Escape'){
    searchEl.value = '';
    state.query = '';
    clearSelection();
    state.building = 'All';
    syncChips();
    render();
    searchEl.blur();
  }
});

function matchesQuery(f, q){
  if (!q) return true;
  if (f.name.toLowerCase().includes(q)) return true;
  if (f.offices.some(o => o.toLowerCase().includes(q))) return true;
  if (f.building && f.building.toLowerCase() === q) return true;
  if (f.building && BUILDINGS[f.building] && BUILDINGS[f.building].name.toLowerCase().includes(q)) return true;
  if (f.department && f.department.toLowerCase().includes(q)) return true;
  return false;
}
function getFiltered(){
  return FACULTY.filter(f =>
    (state.school === 'All' || f.school === state.school) &&
    (state.building === 'All' || f.building === state.building) &&
    matchesQuery(f, state.query)
  );
}

/* ------------------------------- RENDER ------------------------------------ */
const resultsEl = document.getElementById('results');
const counterEl = document.getElementById('counter');
const panelLabel = document.getElementById('panelLabel');

function render(){
  const filtered = getFiltered();
  counterEl.textContent = `${filtered.length} / ${FACULTY.length}`;
  panelLabel.textContent = state.building !== 'All'
    ? `Building ${state.building}`
    : (state.query ? 'Search results' : 'All faculty');

  if (state.query){
    if (filtered.length === 0){
      clearSelection();
    } else if (state.dismissed){
      // user explicitly closed the popup -- stay hidden until they type or click again
    } else if (state.manualPick && state.selectedFaculty && filtered.includes(state.selectedFaculty)){
      // a deliberate click is still valid among the current results -> leave it pinned
    } else {
      const top = filtered[0];
      if (top.building && BUILDINGS[top.building]) selectBuilding(top.building, top);
      else clearSelection();
    }
  } else if (!state.manualPick){
    // search box is empty and nothing was deliberately picked -> show nothing
    clearSelection();
  }

  resultsEl.innerHTML = '';
  if (filtered.length === 0){
    resultsEl.innerHTML = `<div class="empty">No faculty match your search.<br>Try a different name, office number, or building.</div>`;
    return;
  }

  filtered.forEach(f => {
    const card = document.createElement('div');
    card.className = 'card' + (state.selectedFaculty === f ? ' active' : '');
    const avail = isAvailableNow(f);
    const badge = avail === 'available'
      ? `<span class="badge avail"><span class="pulse"></span>Available now</span>`
      : avail === 'unavailable'
        ? `<span class="badge unavail">Not available</span>`
        : `<span class="badge unavail">Hours vary</span>`;
    const bldgTag = f.building ? `<span class="tag bldg" style="background:${BUILDINGS[f.building].color}">${f.building}</span>` : '';
    const officeTag = f.offices.length ? `<span class="tag office">${f.offices.join(', ')}</span>` : '';
    const schoolTag = f.school ? `<span class="tag">${SCHOOL_SHORT[f.school] || f.school}</span>` : '';
    const hoursHtml = f.hours.length
      ? `<div class="hours">${f.hours.map(h => `<div class="hr-row"><span class="day">${h.dayLabel || '—'}</span><span>${h.timeLabel || '—'}</span></div>`).join('')}</div>`
      : '';
    const showDirBtn = state.youAreHere && f.building && f.building !== state.youAreHere;
    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-name">${f.name}</div>
          ${f.department ? `<div class="card-dept">${f.department}</div>` : ''}
        </div>
        ${badge}
      </div>
      <div class="card-meta">${schoolTag}${bldgTag}${officeTag}</div>
      ${!f.offices.length ? `<div class="no-office">Office not listed</div>` : ''}
      ${hoursHtml}
      ${showDirBtn ? `<button class="card-dir">Directions</button>` : ''}
    `;
    card.onclick = () => {
      if (f.building && BUILDINGS[f.building]) selectBuilding(f.building, f, true);
      else clearSelection();
      render();
    };
    const cardDirBtn = card.querySelector('.card-dir');
    if (cardDirBtn){
      cardDirBtn.onclick = (e) => {
        e.stopPropagation();
        selectBuilding(f.building, f, true);
        showRoute(state.youAreHere, f.building);
        render();
      };
    }
    resultsEl.appendChild(card);
  });
}

syncChips();
render();
setInterval(render, 30000);