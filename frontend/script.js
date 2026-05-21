// API URL
const API_URL = 'https://aurak-campus-api.onrender.com';

// Building polygons
const buildingPolygons = {
    'G': [ { "x": 498, "y": 324 }, { "x": 460, "y": 364 }, { "x": 459, "y": 380 }, { "x": 457, "y": 378 }, { "x": 456, "y": 388 }, { "x": 474, "y": 399 }, { "x": 475, "y": 402 }, { "x": 477, "y": 400 }, { "x": 481, "y": 402 }, { "x": 481, "y": 407 }, { "x": 483, "y": 405 }, { "x": 490, "y": 408 }, { "x": 491, "y": 412 }, { "x": 496, "y": 411 }, { "x": 500, "y": 415 }, { "x": 501, "y": 411 }, { "x": 515, "y": 417 }, { "x": 528, "y": 402 }, { "x": 531, "y": 404 }, { "x": 533, "y": 401 }, { "x": 533, "y": 398 }, { "x": 540, "y": 390 }, { "x": 543, "y": 389 }, { "x": 551, "y": 380 }, { "x": 551, "y": 354 }, { "x": 530, "y": 343 }, { "x": 532, "y": 340 }, { "x": 524, "y": 334 }, { "x": 521, "y": 338 }, { "x": 498, "y": 324 } ], 
    'K':  [ { "x": 627, "y": 362 }, { "x": 610, "y": 382 }, { "x": 609, "y": 411 }, { "x": 627, "y": 421 }, { "x": 627, "y": 422 }, { "x": 630, "y": 424 }, { "x": 632, "y": 423 }, { "x": 646, "y": 431 }, { "x": 646, "y": 433 }, { "x": 650, "y": 435 }, { "x": 651, "y": 434 }, { "x": 655, "y": 436 }, { "x": 659, "y": 439 }, { "x": 657, "y": 455 }, { "x": 679, "y": 467 }, { "x": 681, "y": 465 }, { "x": 704, "y": 478 }, { "x": 708, "y": 478 }, { "x": 722, "y": 463 }, { "x": 722, "y": 436 }, { "x": 719, "y": 433 }, { "x": 721, "y": 432 }, { "x": 705, "y": 421 }, { "x": 705, "y": 419 }, { "x": 699, "y": 415 }, { "x": 698, "y": 416 }, { "x": 698, "y": 415 }, { "x": 690, "y": 411 }, { "x": 693, "y": 407 }, { "x": 689, "y": 403 }, { "x": 689, "y": 394 }, { "x": 684, "y": 389 }, { "x": 684, "y": 390 }, { "x": 678, "y": 388 }, { "x": 673, "y": 390 }, { "x": 674, "y": 393 }, { "x": 668, "y": 388 }, { "x": 669, "y": 386 }, { "x": 666, "y": 384 }, { "x": 663, "y": 385 }, { "x": 650, "y": 377 }, { "x": 650, "y": 376 }, { "x": 647, "y": 372 }, { "x": 645, "y": 374 }, { "x": 630, "y": 366 }, { "x": 631, "y": 365 }, { "x": 628, "y": 363 } ], 
    'H': [ { "x": 573, "y": 486 }, { "x": 560, "y": 504 }, { "x": 557, "y": 508 }, { "x": 556, "y": 508 }, { "x": 556, "y": 510 }, { "x": 559, "y": 511 }, { "x": 559, "y": 515 }, { "x": 557, "y": 515 }, { "x": 556, "y": 517 }, { "x": 557, "y": 520 }, { "x": 557, "y": 524 }, { "x": 556, "y": 521 }, { "x": 556, "y": 525 }, { "x": 557, "y": 527 }, { "x": 557, "y": 532 }, { "x": 625, "y": 570 }, { "x": 633, "y": 562 }, { "x": 632, "y": 560 }, { "x": 635, "y": 556 }, { "x": 643, "y": 553 }, { "x": 642, "y": 525 }, { "x": 641, "y": 525 }, { "x": 632, "y": 527 }, { "x": 636, "y": 521 }, { "x": 636, "y": 520 }, { "x": 591, "y": 495 }, { "x": 587, "y": 497 }, { "x": 583, "y": 494 }, { "x": 584, "y": 493 }, { "x": 574, "y": 486 } ],
    "J":[{"x":502,"y":442},{"x":502,"y":445},{"x":480,"y":471},{"x":480,"y":504},{"x":508,"y":520},{"x":508,"y":522},{"x":513,"y":525},{"x":515,"y":524},{"x":530,"y":532},{"x":533,"y":529},{"x":536,"y":530},{"x":549,"y":516},{"x":549,"y":485},{"x":534,"y":477},{"x":528,"y":473},{"x":523,"y":469},{"x":518,"y":464},{"x":515,"y":462},{"x":510,"y":455},{"x":507,"y":451},{"x":503,"y":445}],
    "D":[{"x":317,"y":457},{"x":315,"y":481},{"x":317,"y":484},{"x":318,"y":489},{"x":322,"y":492},{"x":331,"y":497},{"x":338,"y":498},{"x":353,"y":495},{"x":359,"y":494},{"x":359,"y":492},{"x":359,"y":478},{"x":364,"y":472},{"x":365,"y":467},{"x":366,"y":459},{"x":365,"y":453},{"x":362,"y":450},{"x":360,"y":448},{"x":360,"y":447},{"x":361,"y":447},{"x":361,"y":446},{"x":360,"y":446},{"x":358,"y":448},{"x":356,"y":447},{"x":353,"y":446},{"x":352,"y":444},{"x":354,"y":440},{"x":352,"y":440},{"x":349,"y":442},{"x":341,"y":441},{"x":335,"y":442},{"x":326,"y":446},{"x":321,"y":450},{"x":318,"y":454},{"x":317,"y":459}],
    "L":[{"x":491,"y":289},{"x":479,"y":304},{"x":478,"y":322},{"x":484,"y":328},{"x":487,"y":325},{"x":487,"y":321},{"x":496,"y":324},{"x":499,"y":323},{"x":521,"y":338},{"x":524,"y":334},{"x":532,"y":339},{"x":531,"y":343},{"x":551,"y":356},{"x":551,"y":364},{"x":565,"y":372},{"x":577,"y":358},{"x":577,"y":339},{"x":538,"y":315},{"x":537,"y":307},{"x":528,"y":300},{"x":523,"y":307}],
    "C":[{"x":389,"y":268},{"x":326,"y":339},{"x":327,"y":341},{"x":326,"y":346},{"x":336,"y":350},{"x":397,"y":279},{"x":397,"y":276},{"x":398,"y":273},{"x":396,"y":271},{"x":399,"y":268},{"x":404,"y":271},{"x":433,"y":240},{"x":433,"y":235},{"x":434,"y":233},{"x":425,"y":228},{"x":394,"y":262},{"x":395,"y":263},{"x":394,"y":268},{"x":396,"y":267},{"x":393,"y":269},{"x":390,"y":268}]
};

// Building colors (unique per building)
const buildingColors = {
    'G': { fill: 'rgba(239, 68, 68, 0.35)', stroke: '#ef4444', text: '#ef4444' , labelX: 497, labelY: 224},
    'K': { fill: 'rgba(245, 158, 11, 0.35)', stroke: '#f59e0b', text: '#f59e0b' , labelX: 628, labelY: 262},   // Orange
    'H': { fill: 'rgba(16, 185, 129, 0.35)', stroke: '#10b981', text: '#10b981' , labelX: 577, labelY: 389},  // Green
    'J': { fill: 'rgba(16, 89, 185, 0.35)', stroke: '#1059b9', text: '#1059b9' , labelX: 500, labelY: 342},
    'D': { fill: 'rgba(185, 16, 81, 0.35)', stroke: '#b91051', text: '#b91051' , labelX: 345, labelY: 321},
    'L': { fill: 'rgba(139, 92, 246, 0.35)', stroke: '#8b5cf6', text: '#8b5cf6', labelX: 491, labelY: 189 },
    'C': { fill: 'rgba(6, 182, 212, 0.35)', stroke: '#06b6d4', text: '#06b6d4', labelX: 389, labelY: 168 }
};


const buildingNames = {
    'G': 'School of Engineering and Computing',
    'H': 'RAK Bank School of Business',
    'K': 'Abdullah Bin Ali Al Sharhan <br>School of Arts and Sciences',
    'J': 'Saqr Library',
    'D': 'Student Affairs',
    'L': 'Engineering Labs',
    'C': 'Student Centre'
};


// ESC key to clear search
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        searchInput.value = '';
        searchFaculty('');
        searchInput.blur();  // removes focus from input
    }
});

// Focus search with  /
document.addEventListener('keydown', (e) => {
    const searchInput = document.getElementById('searchInput');
    
    // Forward slash /
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
});

let activeHighlights = {}; // Store active highlights per building
let activeLabels = {};
let savedHighlightData = {}; // Persists facultyName/office/room across redraws

const img = document.getElementById('campusMap');
let scaleX = 1, scaleY = 1;
function escapeJs(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, '\\n');
}
function updateScale() {
    if (img.complete && img.naturalWidth) {
        scaleX = img.getBoundingClientRect().width / img.naturalWidth;
        scaleY = img.getBoundingClientRect().height / img.naturalHeight;
    }
}

function getPolygonCenter(points) {
    if (!points || points.length === 0) {
        console.warn('Invalid polygon points');
        return { x: 0, y: 0 };
    }
    
    const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
    return {
        x: sum.x / points.length,
        y: sum.y / points.length
    };
}
function getPolygonTop(points) {
    // Get the highest point (smallest Y) of the polygon
    const topPoint = points.reduce((top, p) => p.y < top.y ? p : top, points[0]);
    return topPoint;
}

function drawPolygon(points, buildingCode, roomNumber = null, facultyName = null, office = null) {
    const colors = buildingColors[buildingCode];
    
    if (activeHighlights[buildingCode]) {
        activeHighlights[buildingCode].remove();
        delete activeHighlights[buildingCode];
    }
    if (activeLabels[buildingCode]) {
        activeLabels[buildingCode].remove();
        delete activeLabels[buildingCode];
    }
    
    savedHighlightData[buildingCode] = { roomNumber, facultyName, office };
    
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '999';
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const scaledPoints = points.map(p => ({ x: p.x * scaleX, y: p.y * scaleY }));
    polygon.setAttribute('points', scaledPoints.map(p => `${p.x},${p.y}`).join(' '));
    polygon.setAttribute('fill', colors.fill);
    polygon.setAttribute('stroke', colors.stroke);
    polygon.setAttribute('stroke-width', '3');
    
    svg.appendChild(polygon);
    container.appendChild(svg);
    
    const labelX = colors.labelX * scaleX;
    const labelY = colors.labelY * scaleY;
    const minY = 10; // never closer than 10px to top
    const clampedY = Math.max(minY, labelY);
    const infoBox = document.createElement('div');
    infoBox.style.position = 'absolute';
    infoBox.style.left = `${labelX}px`;
    infoBox.style.top = `${clampedY}px`;
    infoBox.style.transform = 'translateX(-50%)';
    infoBox.style.backgroundColor = '#1e1e2e';
    infoBox.style.color = colors.text;
    
    // SCALING FIXES
    const pad = Math.max(3, Math.round(12 * scaleX));
    const padH = Math.max(5, Math.round(20 * scaleX));
    infoBox.style.padding = `${pad}px ${padH}px`;
    infoBox.style.borderRadius = '10px';
    infoBox.style.border = `2px solid ${colors.stroke}`;
    infoBox.style.zIndex = '1000';
    infoBox.style.fontFamily = 'sans-serif';
    infoBox.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
    infoBox.style.backdropFilter = 'blur(8px)';
    infoBox.style.minWidth = `${Math.max(40, Math.round(180 * scaleX))}px`;
    infoBox.style.maxWidth = `${Math.round(300  * scaleX)}px`;
    infoBox.style.textAlign = 'center';
    
    const fs1 = Math.max(7,  Math.round(18 * scaleX));
    const fs2 = Math.max(5,  Math.round(11 * scaleX));
    const fs3 = Math.max(6,  Math.round(14 * scaleX));
    const fs4 = Math.max(5,  Math.round(13 * scaleX));
    const fs5 = Math.max(5,  Math.round(12 * scaleX));
    
    let shortName = buildingCode;
    let fullName = buildingNames[buildingCode];
    
    let content = `<div style="font-size: ${fs1}px; font-weight: bold; margin-bottom: 4px;">Building ${shortName}</div>`;
    content += `<div style="font-size: ${fs2}px; color: ${colors.text}; opacity: 0.8; margin-bottom: 8px;">${fullName}</div>`;
    
    if (facultyName) {
        content += `<div style="font-size: ${fs3}px; color: #e0e0e0; margin-bottom: 4px;">${facultyName}</div>`;
    }
    
    if (office) {
        content += `<div style="font-size: ${fs4}px; color: #a0a0a0;">${office}</div>`;
    } else if (roomNumber) {
        content += `<div style="font-size: ${fs4}px; color: #a0a0a0;">Room ${roomNumber}</div>`;
    }
    
    if (!facultyName && !office && !roomNumber) {
        content += `<div style="font-size: ${fs5}px; color: #a0a0a0;">Click a faculty name</div>`;
    }
    
    infoBox.innerHTML = content;
    
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-8px';
    arrow.style.left = '50%';
    arrow.style.transform = 'translateX(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '8px solid transparent';
    arrow.style.borderRight = '8px solid transparent';
    arrow.style.borderTop = `8px solid ${colors.stroke}`;
    infoBox.appendChild(arrow);
    
    container.appendChild(infoBox);
    document.getElementById('highlightLayer').appendChild(container);
    
    activeHighlights[buildingCode] = container;
    activeLabels[buildingCode] = infoBox;
}

function highlightBuilding(buildingCode, roomNumber = null, facultyName = null, office = null) {
    if (!buildingCode) return;
    
    const points = buildingPolygons[buildingCode];
    if (!points) return;
    clearAllHighlights();
    updateScale();
    drawPolygon(points, buildingCode, roomNumber, facultyName, office);
    
    // Scroll to map
    document.querySelector('.map-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function clearAllHighlights() {
    for (const code in activeHighlights) {
        if (activeHighlights[code]) activeHighlights[code].remove();
        if (activeLabels[code]) activeLabels[code].remove();
    }
    activeHighlights = {};
    activeLabels = {};
    savedHighlightData = {}
}

let isFirstSearch = true;

async function searchFaculty(query) {
    const resultsDiv = document.getElementById('results');
    
    if (!query.trim()) {
        resultsDiv.innerHTML = '<p class="empty-state">Type a name to search...</p>';
        clearAllHighlights();
        return;
    }
    
    // Show appropriate loading message
    if (isFirstSearch) {
        resultsDiv.innerHTML = '<div class="loading-spinner">Waking up server (cold start)...</div><p style="text-align: center; font-size: 12px; color: #888; margin-top: 8px;">First request may take a few seconds</p>';
    } else {
        resultsDiv.innerHTML = '<div class="loading-spinner">Searching faculty...</div>';
    }
    
    try {
        const startTime = Date.now();
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        // Cold start done after first successful response
        if (isFirstSearch) {
            const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
            console.log(`First request completed in ${elapsed} seconds`);
            isFirstSearch = false;
        }
        
        if (!data.results || data.results.length === 0) {
            const suggestions = ['Ali', 'Alnoman', 'Ahmed', 'Hassan', 'Fatima'];
            const matchingSuggestions = suggestions.filter(s => 
                s.toLowerCase().includes(query.toLowerCase())
            );
            
            if (matchingSuggestions.length > 0) {
                resultsDiv.innerHTML = `
                    <p class="empty-state" style="color: #f59e0b;">No faculty found for "${escapeHtml(query)}"</p>
                    <div style="margin-top: 12px; text-align: center;">
                        <p style="font-size: 12px; color: #888; margin-bottom: 8px;">Did you mean?</p>
                        ${matchingSuggestions.map(s => 
                            `<button onclick="document.getElementById('searchInput').value='${s}'; searchFaculty('${s}');" 
                                style="background: #2a2a2a; border: none; color: #3b82f6; padding: 4px 12px; margin: 4px; border-radius: 16px; cursor: pointer; font-size: 12px;">
                                ${s}
                            </button>`
                        ).join('')}
                    </div>
                `;
            } else {
                resultsDiv.innerHTML = `<p class="empty-state">No faculty found for "${escapeHtml(query)}"</p>`;
            }
            clearAllHighlights();
            return;
        }
        
        if (!window.allFaculty) {
            window.allFaculty = data.results;
        }
        
        resultsDiv.innerHTML = data.results.map((f, index) => {
            let roomNum = null;
            if (f.office && f.office.includes(' ')) {
                roomNum = f.office.split(' ')[1];
            }
            
            const buildingColor = buildingColors[f.building]?.text || '#3b82f6';
            const delay = index * 0.03;
            
            return `
                <div class="result-card" onclick="highlightBuilding('${f.building || ''}', '${roomNum || ''}', '${escapeJs(f.name || '')}', '${escapeJs(f.office || '')}')" style="animation-delay: ${delay}s;">
                    <div class="result-name" style="color: ${buildingColor};">${escapeHtml(f.name || 'Unknown')}</div>
                    <div class="result-title">${escapeHtml(f.title || '')}</div>
                    ${f.office ? `<div class="result-office">Office: ${escapeHtml(f.office)}</div>` : ''}
                    ${f.building ? `<div class="result-building">${escapeHtml((buildingNames[f.building] || f.building).replace(/<br>/g, ' '))}</div>` : ''}
                    ${f.profile_url ? `<a href="${escapeHtml(f.profile_url)}" target="_blank" class="result-profile" onclick="event.stopPropagation()">View Profile →</a>` : ''}
                </div>
            `;
        }).join('');
        
        clearAllHighlights();
        
        if (data.results.length > 0 && data.results[0].building) {
            let roomNum = null;
            let office = data.results[0].office || '';
            if (office.includes(' ')) {
                roomNum = office.split(' ')[1];
            }
            setTimeout(() => {
                highlightBuilding(data.results[0].building, roomNum, data.results[0].name, office);
            }, 50);
        }
    } catch (error) {
        console.error('Search error:', error);
        
        // Check if it's a connection error (cold start or server down)
        if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
            resultsDiv.innerHTML = `
                <div class="loading-spinner">Server is waking up...</div>
                <p style="text-align: center; font-size: 12px; color: #f59e0b; margin-top: 8px;">Render's free tier sleeps after inactivity.</p>
                <p style="text-align: center; font-size: 12px; color: #888;">Please wait a few seconds and try again.</p>
            `;
        } else {
            resultsDiv.innerHTML = '<p class="empty-state" style="color: #ef4444;">Error connecting to server. Make sure backend is running.</p>';
        }
        clearAllHighlights();
    }
}
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Debounced search
let debounceTimer;
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => searchFaculty(e.target.value), 300);
});


window.addEventListener('resize', () => {
    updateScale();
    updateHoverAreas();  // Add this line
    // Redraw all active highlights
    for (const code in activeHighlights) {
        const points = buildingPolygons[code];
        if (points) {
            drawPolygon(points, code);
        }
    }
});

setTimeout(updateScale, 500);

document.getElementById('results').innerHTML = '<p class="empty-state">Type a name to search...</p>';

// Fuzzy search helper (simple implementation)
function fuzzySearch(query, text) {
    if (!query || !text) return false;
    query = query.toLowerCase();
    text = text.toLowerCase();
    
    // Exact match or starts with
    if (text.includes(query)) return true;
    
    // Check if characters appear in order (fuzzy)
    let queryIndex = 0;
    for (let i = 0; i < text.length && queryIndex < query.length; i++) {
        if (text[i] === query[queryIndex]) {
            queryIndex++;
        }
    }
    return queryIndex === query.length;
}

// Get suggestions based on query
function getSuggestions(query, facultyList) {
    const suggestions = [];
    const queryLower = query.toLowerCase();
    
    // Find similar names (first 3)
    for (const f of facultyList) {
        if (suggestions.length >= 3) break;
        if (f.name && f.name.toLowerCase().includes(queryLower) && f.name.toLowerCase() !== queryLower) {
            suggestions.push(f.name);
        }
    }
    
    return suggestions;
}

// Building tooltip on hover (border only, no fill)
function addBuildingTooltips() {
    const mapWrapper = document.getElementById('mapWrapper');

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'building-tooltip';
    mapWrapper.appendChild(tooltip);

    // Single SVG layer for all hit areas
    const hitSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hitSvg.style.position = 'absolute';
    hitSvg.style.top = '0';
    hitSvg.style.left = '0';
    hitSvg.style.width = '100%';
    hitSvg.style.height = '100%';
    hitSvg.style.zIndex = '998';
    mapWrapper.appendChild(hitSvg);
    window._hitSvg = hitSvg;

    // Track which building is currently hovered
    let currentHoveredBuilding = null;
    let hideTimeout = null;

    for (const [buildingCode, points] of Object.entries(buildingPolygons)) {
        const colors = buildingColors[buildingCode];
        if (!colors) continue;

        // Invisible hit polygon
        const hitPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        hitPoly.setAttribute('fill', 'transparent');
        hitPoly.setAttribute('stroke', 'none');
        hitPoly.style.cursor = 'pointer';
        hitPoly.style.pointerEvents = 'fill';
        hitSvg.appendChild(hitPoly);

        // Visible border polygon (shown on hover)
        const borderSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        borderSvg.style.position = 'absolute';
        borderSvg.style.top = '0';
        borderSvg.style.left = '0';
        borderSvg.style.width = '100%';
        borderSvg.style.height = '100%';
        borderSvg.style.pointerEvents = 'none';
        borderSvg.style.opacity = '0';
        borderSvg.style.transition = 'opacity 0.15s ease';
        borderSvg.style.zIndex = '999';

        const borderPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        borderPoly.setAttribute('fill', 'transparent');
        borderPoly.setAttribute('stroke', colors.stroke);
        borderPoly.setAttribute('stroke-width', '3');
        borderSvg.appendChild(borderPoly);
        mapWrapper.appendChild(borderSvg);

        // Store refs for resize
        if (!window.hoverOverlays) window.hoverOverlays = {};
        window.hoverOverlays[buildingCode] = { hitPoly, borderPoly, borderSvg, points };

        // Set initial scaled points
        const scaledPoints = points.map(p => `${p.x * scaleX},${p.y * scaleY}`).join(' ');
        hitPoly.setAttribute('points', scaledPoints);
        borderPoly.setAttribute('points', scaledPoints);

        hitPoly.addEventListener('mouseenter', () => {
            // Clear any pending hide timeout
            if (hideTimeout) clearTimeout(hideTimeout);
            
            // Check if this building is currently highlighted from search
            if (activeHighlights[buildingCode]) {
                return;
            }
            
            // Hide previous building's border if different
            if (currentHoveredBuilding && currentHoveredBuilding !== buildingCode) {
                const prev = window.hoverOverlays[currentHoveredBuilding];
                if (prev) prev.borderSvg.style.opacity = '0';
            }
            
            // Show current building's border
            currentHoveredBuilding = buildingCode;
            borderSvg.style.opacity = '1';

            const center = getPolygonCenter(points);
            const cx = center.x * scaleX;
            const cy = center.y * scaleY;

            tooltip.innerHTML = `
                <div style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">Building ${buildingCode}</div>
                <div style="font-size: 10px; color: ${colors.text}; opacity: 0.8;">${buildingNames[buildingCode]}</div>
            `;
            tooltip.style.borderColor = colors.stroke;
            tooltip.style.left = `${cx}px`;
            tooltip.style.top = `${cy - 10}px`;
            tooltip.style.transform = 'translate(-50%, -100%)';
            tooltip.classList.add('show');
        });

        hitPoly.addEventListener('mouseleave', () => {
            // Don't hide immediately — wait to see if entering another building
            hideTimeout = setTimeout(() => {
                // Only hide if we're not hovering another building
                if (currentHoveredBuilding === buildingCode) {
                    borderSvg.style.opacity = '0';
                    tooltip.classList.remove('show');
                    currentHoveredBuilding = null;
                }
            }, 50); // Very short delay, just enough to detect next mouseenter
        });
    }
}

function updateHoverAreas() {
    if (!window.hoverOverlays) return;
    updateScale();
    for (const [code, d] of Object.entries(window.hoverOverlays)) {
        const scaled = d.points.map(p => `${p.x * scaleX},${p.y * scaleY}`).join(' ');
        d.hitPoly.setAttribute('points', scaled);
        d.borderPoly.setAttribute('points', scaled);
    }
}

img.onload = () => {
    updateScale();
    addBuildingTooltips();  // Add this line
};