// API URL
const API_URL = 'http://localhost:8000';

// Building polygons
// const buildingPolygons = {
//     'G': [ { "x": 498, "y": 324 }, { "x": 460, "y": 364 }, { "x": 459, "y": 380 }, { "x": 457, "y": 378 }, { "x": 456, "y": 388 }, { "x": 474, "y": 399 }, { "x": 475, "y": 402 }, { "x": 477, "y": 400 }, { "x": 481, "y": 402 }, { "x": 481, "y": 407 }, { "x": 483, "y": 405 }, { "x": 490, "y": 408 }, { "x": 491, "y": 412 }, { "x": 496, "y": 411 }, { "x": 500, "y": 415 }, { "x": 501, "y": 411 }, { "x": 515, "y": 417 }, { "x": 528, "y": 402 }, { "x": 531, "y": 404 }, { "x": 533, "y": 401 }, { "x": 533, "y": 398 }, { "x": 540, "y": 390 }, { "x": 543, "y": 389 }, { "x": 551, "y": 380 }, { "x": 551, "y": 354 }, { "x": 530, "y": 343 }, { "x": 532, "y": 340 }, { "x": 524, "y": 334 }, { "x": 521, "y": 338 }, { "x": 498, "y": 324 } ], 
//     'K':  [ { "x": 627, "y": 362 }, { "x": 610, "y": 382 }, { "x": 609, "y": 411 }, { "x": 627, "y": 421 }, { "x": 627, "y": 422 }, { "x": 630, "y": 424 }, { "x": 632, "y": 423 }, { "x": 646, "y": 431 }, { "x": 646, "y": 433 }, { "x": 650, "y": 435 }, { "x": 651, "y": 434 }, { "x": 655, "y": 436 }, { "x": 659, "y": 439 }, { "x": 657, "y": 455 }, { "x": 679, "y": 467 }, { "x": 681, "y": 465 }, { "x": 704, "y": 478 }, { "x": 708, "y": 478 }, { "x": 722, "y": 463 }, { "x": 722, "y": 436 }, { "x": 719, "y": 433 }, { "x": 721, "y": 432 }, { "x": 705, "y": 421 }, { "x": 705, "y": 419 }, { "x": 699, "y": 415 }, { "x": 698, "y": 416 }, { "x": 698, "y": 415 }, { "x": 690, "y": 411 }, { "x": 693, "y": 407 }, { "x": 689, "y": 403 }, { "x": 689, "y": 394 }, { "x": 684, "y": 389 }, { "x": 684, "y": 390 }, { "x": 678, "y": 388 }, { "x": 673, "y": 390 }, { "x": 674, "y": 393 }, { "x": 668, "y": 388 }, { "x": 669, "y": 386 }, { "x": 666, "y": 384 }, { "x": 663, "y": 385 }, { "x": 650, "y": 377 }, { "x": 650, "y": 376 }, { "x": 647, "y": 372 }, { "x": 645, "y": 374 }, { "x": 630, "y": 366 }, { "x": 631, "y": 365 }, { "x": 628, "y": 363 } ], 
//     'H': [ { "x": 573, "y": 486 }, { "x": 560, "y": 504 }, { "x": 557, "y": 508 }, { "x": 556, "y": 508 }, { "x": 556, "y": 510 }, { "x": 559, "y": 511 }, { "x": 559, "y": 515 }, { "x": 557, "y": 515 }, { "x": 556, "y": 517 }, { "x": 557, "y": 520 }, { "x": 557, "y": 524 }, { "x": 556, "y": 521 }, { "x": 556, "y": 525 }, { "x": 557, "y": 527 }, { "x": 557, "y": 532 }, { "x": 625, "y": 570 }, { "x": 633, "y": 562 }, { "x": 632, "y": 560 }, { "x": 635, "y": 556 }, { "x": 643, "y": 553 }, { "x": 642, "y": 525 }, { "x": 641, "y": 525 }, { "x": 632, "y": 527 }, { "x": 636, "y": 521 }, { "x": 636, "y": 520 }, { "x": 591, "y": 495 }, { "x": 587, "y": 497 }, { "x": 583, "y": 494 }, { "x": 584, "y": 493 }, { "x": 574, "y": 486 } ],
//     "J":[{"x":502,"y":442},{"x":502,"y":445},{"x":480,"y":471},{"x":480,"y":504},{"x":508,"y":520},{"x":508,"y":522},{"x":513,"y":525},{"x":515,"y":524},{"x":530,"y":532},{"x":533,"y":529},{"x":536,"y":530},{"x":549,"y":516},{"x":549,"y":485},{"x":534,"y":477},{"x":528,"y":473},{"x":523,"y":469},{"x":518,"y":464},{"x":515,"y":462},{"x":510,"y":455},{"x":507,"y":451},{"x":503,"y":445}],
//     "D":[{"x":317,"y":457},{"x":315,"y":481},{"x":317,"y":484},{"x":318,"y":489},{"x":322,"y":492},{"x":331,"y":497},{"x":338,"y":498},{"x":353,"y":495},{"x":359,"y":494},{"x":359,"y":492},{"x":359,"y":478},{"x":364,"y":472},{"x":365,"y":467},{"x":366,"y":459},{"x":365,"y":453},{"x":362,"y":450},{"x":360,"y":448},{"x":360,"y":447},{"x":361,"y":447},{"x":361,"y":446},{"x":360,"y":446},{"x":358,"y":448},{"x":356,"y":447},{"x":353,"y":446},{"x":352,"y":444},{"x":354,"y":440},{"x":352,"y":440},{"x":349,"y":442},{"x":341,"y":441},{"x":335,"y":442},{"x":326,"y":446},{"x":321,"y":450},{"x":318,"y":454},{"x":317,"y":459}],
//     "L":[{"x":491,"y":289},{"x":479,"y":304},{"x":478,"y":322},{"x":484,"y":328},{"x":487,"y":325},{"x":487,"y":321},{"x":496,"y":324},{"x":499,"y":323},{"x":521,"y":338},{"x":524,"y":334},{"x":532,"y":339},{"x":531,"y":343},{"x":551,"y":356},{"x":551,"y":364},{"x":565,"y":372},{"x":577,"y":358},{"x":577,"y":339},{"x":538,"y":315},{"x":537,"y":307},{"x":528,"y":300},{"x":523,"y":307}],
//     "C":[{"x":389,"y":268},{"x":326,"y":339},{"x":327,"y":341},{"x":326,"y":346},{"x":336,"y":350},{"x":397,"y":279},{"x":397,"y":276},{"x":398,"y":273},{"x":396,"y":271},{"x":399,"y":268},{"x":404,"y":271},{"x":433,"y":240},{"x":433,"y":235},{"x":434,"y":233},{"x":425,"y":228},{"x":394,"y":262},{"x":395,"y":263},{"x":394,"y":268},{"x":396,"y":267},{"x":393,"y":269},{"x":390,"y":268}]
// };

const buildingPolygons = {
    'G': [
      {"x":0.52761,"y":0.51661},{"x":0.5275,"y":0.5066},{"x":0.53099,"y":0.50306},{"x":0.53099,"y":0.49504},
      {"x":0.53121,"y":0.49458},{"x":0.53131,"y":0.49227},{"x":0.57467,"y":0.44666},{"x":0.5774,"y":0.44867},
      {"x":0.57762,"y":0.44805},{"x":0.5884,"y":0.45406},{"x":0.58851,"y":0.45452},{"x":0.59679,"y":0.45899},
      {"x":0.59799,"y":0.45822},{"x":0.60311,"y":0.46115},{"x":0.60572,"y":0.45837},{"x":0.61498,"y":0.463},
      {"x":0.61509,"y":0.46716},{"x":0.6262,"y":0.47332},{"x":0.62631,"y":0.47471},{"x":0.63655,"y":0.48025},
      {"x":0.63666,"y":0.48087},{"x":0.63677,"y":0.50737},{"x":0.62577,"y":0.51877},{"x":0.62424,"y":0.51846},
      {"x":0.61618,"y":0.52724},{"x":0.61607,"y":0.53002},{"x":0.61346,"y":0.53325},{"x":0.61139,"y":0.53202},
      {"x":0.59483,"y":0.54943},{"x":0.57642,"y":0.53972},{"x":0.5762,"y":0.54466},{"x":0.575,"y":0.54481},
      {"x":0.57489,"y":0.54003},{"x":0.57402,"y":0.54157},{"x":0.56977,"y":0.53911},{"x":0.56977,"y":0.54111},
      {"x":0.56923,"y":0.54142},{"x":0.56846,"y":0.54142},{"x":0.56836,"y":0.53849},{"x":0.55659,"y":0.53218},
      {"x":0.55681,"y":0.53464},{"x":0.55594,"y":0.53479},{"x":0.55528,"y":0.53449},{"x":0.55517,"y":0.53125},
      {"x":0.55038,"y":0.52894},{"x":0.55005,"y":0.53048},{"x":0.54951,"y":0.53125},{"x":0.54896,"y":0.53094},
      {"x":0.54896,"y":0.52802}
    ],
    'K': [
      {"x":0.72345,"y":0.48895},{"x":0.70285,"y":0.51037},{"x":0.70285,"y":0.53974},{"x":0.72362,"y":0.55082},
      {"x":0.72396,"y":0.55274},{"x":0.72856,"y":0.55491},{"x":0.72975,"y":0.55419},{"x":0.74592,"y":0.56286},
      {"x":0.74609,"y":0.5643},{"x":0.75086,"y":0.56671},{"x":0.75154,"y":0.5655},{"x":0.75766,"y":0.56887},
      {"x":0.75766,"y":0.57249},{"x":0.75869,"y":0.57224},{"x":0.75971,"y":0.57297},{"x":0.76005,"y":0.58837},
      {"x":0.77486,"y":0.59656},{"x":0.77537,"y":0.59584},{"x":0.77605,"y":0.59463},{"x":0.77707,"y":0.59439},
      {"x":0.77775,"y":0.59391},{"x":0.77877,"y":0.59439},{"x":0.77945,"y":0.59511},{"x":0.78064,"y":0.5956},
      {"x":0.78081,"y":0.5968},{"x":0.78098,"y":0.59728},{"x":0.78133,"y":0.598},{"x":0.78184,"y":0.59993},
      {"x":0.78354,"y":0.60089},{"x":0.78643,"y":0.59752},{"x":0.81282,"y":0.61149},{"x":0.81469,"y":0.61004},
      {"x":0.81929,"y":0.611},{"x":0.83375,"y":0.59632},{"x":0.83375,"y":0.56719},{"x":0.83222,"y":0.56647},
      {"x":0.83222,"y":0.56165},{"x":0.81503,"y":0.55274},{"x":0.81503,"y":0.54889},{"x":0.79971,"y":0.54095},
      {"x":0.7992,"y":0.53589},{"x":0.79648,"y":0.53397},{"x":0.79596,"y":0.52169},{"x":0.78967,"y":0.51808},
      {"x":0.78847,"y":0.51952},{"x":0.78235,"y":0.51567},{"x":0.77809,"y":0.51952},{"x":0.77162,"y":0.51615},
      {"x":0.7723,"y":0.51639},{"x":0.7723,"y":0.51471},{"x":0.76737,"y":0.51206},{"x":0.76601,"y":0.51302},
      {"x":0.75034,"y":0.50484},{"x":0.75017,"y":0.50291},{"x":0.74541,"y":0.50074},{"x":0.74422,"y":0.50147},
      {"x":0.72788,"y":0.49304},{"x":0.72788,"y":0.4916}
    ],
    'H': [
      {"x":0.66302,"y":0.62112},{"x":0.64481,"y":0.64086},{"x":0.64259,"y":0.64302},{"x":0.64259,"y":0.64663},
      {"x":0.64447,"y":0.6476},{"x":0.6443,"y":0.65},{"x":0.64276,"y":0.65145},{"x":0.64259,"y":0.65506},
      {"x":0.64413,"y":0.65602},{"x":0.6443,"y":0.65723},{"x":0.64259,"y":0.65867},{"x":0.64276,"y":0.66276},
      {"x":0.64464,"y":0.66397},{"x":0.6443,"y":0.66902},{"x":0.65791,"y":0.67576},{"x":0.65893,"y":0.67769},
      {"x":0.65979,"y":0.67817},{"x":0.66115,"y":0.67841},{"x":0.66183,"y":0.67889},{"x":0.66319,"y":0.67889},
      {"x":0.6763,"y":0.68563},{"x":0.67647,"y":0.68684},{"x":0.72192,"y":0.71139},{"x":0.73009,"y":0.70273},
      {"x":0.73009,"y":0.70056},{"x":0.73026,"y":0.69863},{"x":0.73213,"y":0.69695},{"x":0.73536,"y":0.6955},
      {"x":0.73775,"y":0.69526},{"x":0.73996,"y":0.69382},{"x":0.74149,"y":0.69334},{"x":0.74234,"y":0.69237},
      {"x":0.74234,"y":0.663},{"x":0.74013,"y":0.66156},{"x":0.73758,"y":0.66228},{"x":0.73332,"y":0.663},
      {"x":0.73451,"y":0.66108},{"x":0.73434,"y":0.65747},{"x":0.68328,"y":0.6305},{"x":0.68311,"y":0.62882},
      {"x":0.68226,"y":0.62786},{"x":0.67834,"y":0.63195},{"x":0.6734,"y":0.62954},{"x":0.67477,"y":0.62737}
    ],
    "J":[{"x":0.55474,"y":0.60519},{"x":0.55456,"y":0.61141},{"x":0.55483,"y":0.61166},{"x":0.55491,"y":0.61489},{"x":0.55456,"y":0.61514},{"x":0.55456,"y":0.62062},{"x":0.55518,"y":0.62074},{"x":0.55483,"y":0.6241},{"x":0.55447,"y":0.62448},{"x":0.55447,"y":0.6312},{"x":0.555,"y":0.63132},{"x":0.55491,"y":0.63481},{"x":0.55456,"y":0.63468},{"x":0.55465,"y":0.63904},{"x":0.58748,"y":0.65634},{"x":0.58748,"y":0.65871},{"x":0.5939,"y":0.66182},{"x":0.59522,"y":0.66033},{"x":0.61415,"y":0.67004},{"x":0.61696,"y":0.66779},{"x":0.61934,"y":0.66867},{"x":0.63412,"y":0.65286},{"x":0.63421,"y":0.65186},{"x":0.635,"y":0.65211},{"x":0.63527,"y":0.61664},{"x":0.62937,"y":0.61452},{"x":0.62576,"y":0.61265},{"x":0.62453,"y":0.61191},{"x":0.62427,"y":0.61029},{"x":0.61679,"y":0.60631},{"x":0.61362,"y":0.60444},{"x":0.61274,"y":0.60568},{"x":0.60138,"y":0.59759},{"x":0.59241,"y":0.58925},{"x":0.58589,"y":0.58154},{"x":0.5829,"y":0.57743},{"x":0.58088,"y":0.57444},{"x":0.58088,"y":0.57718}],

    "D":[{"x":0.40626,"y":0.57046},{"x":0.40415,"y":0.57419},{"x":0.40336,"y":0.57382},{"x":0.39975,"y":0.57307},{"x":0.39746,"y":0.57282},{"x":0.39121,"y":0.57282},{"x":0.38769,"y":0.57332},{"x":0.38267,"y":0.57469},{"x":0.37915,"y":0.57606},{"x":0.37625,"y":0.57768},{"x":0.37238,"y":0.58054},{"x":0.36921,"y":0.5839},{"x":0.36718,"y":0.58714},{"x":0.36578,"y":0.59274},{"x":0.36542,"y":0.59685},{"x":0.36551,"y":0.60519},{"x":0.3656,"y":0.61415},{"x":0.36692,"y":0.61875},{"x":0.36912,"y":0.62236},{"x":0.37044,"y":0.62435},{"x":0.37062,"y":0.62771},{"x":0.37132,"y":0.62796},{"x":0.37352,"y":0.62659},{"x":0.37695,"y":0.62908},{"x":0.37889,"y":0.63008},{"x":0.38171,"y":0.6307},{"x":0.38144,"y":0.63344},{"x":0.38223,"y":0.63381},{"x":0.38311,"y":0.6317},{"x":0.38567,"y":0.63257},{"x":0.38857,"y":0.63294},{"x":0.39148,"y":0.63332},{"x":0.39508,"y":0.63369},{"x":0.39896,"y":0.63319},{"x":0.40116,"y":0.63257},{"x":0.40362,"y":0.63195},{"x":0.40661,"y":0.63157},{"x":0.40943,"y":0.6307},{"x":0.41163,"y":0.62933},{"x":0.41365,"y":0.62809},{"x":0.41506,"y":0.62635},{"x":0.41533,"y":0.61265},{"x":0.42228,"y":0.60519},{"x":0.42228,"y":0.60021},{"x":0.42307,"y":0.59884},{"x":0.42342,"y":0.59821},{"x":0.42334,"y":0.59386},{"x":0.42307,"y":0.59062},{"x":0.42087,"y":0.58564},{"x":0.41841,"y":0.58241},{"x":0.41779,"y":0.58154},{"x":0.4177,"y":0.57656},{"x":0.417,"y":0.57569},{"x":0.41137,"y":0.57979},{"x":0.40881,"y":0.57892},{"x":0.40732,"y":0.57842},{"x":0.40732,"y":0.57083}] ,
    "L": [{"x":0.56697,"y":0.40939},{"x":0.55227,"y":0.42532},{"x":0.55218,"y":0.43814},{"x":0.55262,"y":0.43852},{"x":0.55254,"y":0.44561},{"x":0.56063,"y":0.44997},{"x":0.56301,"y":0.44773},{"x":0.57005,"y":0.45146},{"x":0.57357,"y":0.44673},{"x":0.57463,"y":0.44686},{"x":0.58836,"y":0.45383},{"x":0.58853,"y":0.45495},{"x":0.59672,"y":0.45881},{"x":0.59786,"y":0.45806},{"x":0.60297,"y":0.46105},{"x":0.60596,"y":0.45843},{"x":0.61467,"y":0.46329},{"x":0.6152,"y":0.46764},{"x":0.61696,"y":0.46876},{"x":0.61978,"y":0.4654},{"x":0.63641,"y":0.47449},{"x":0.63659,"y":0.49042},{"x":0.65269,"y":0.49889},{"x":0.6673,"y":0.4837},{"x":0.66748,"y":0.46291},{"x":0.6211,"y":0.43827},{"x":0.62092,"y":0.42943},{"x":0.60957,"y":0.42346},{"x":0.60394,"y":0.42906}],
    "C":[{"x":0.3766,"y":0.46453},{"x":0.4486,"y":0.38823},{"x":0.4544,"y":0.3896},{"x":0.45687,"y":0.38723},{"x":0.45625,"y":0.38661},{"x":0.45616,"y":0.3825},{"x":0.45511,"y":0.38163},{"x":0.48943,"y":0.34491},{"x":0.49533,"y":0.34653},{"x":0.5014,"y":0.35188},{"x":0.50026,"y":0.353},{"x":0.49999,"y":0.35699},{"x":0.46673,"y":0.39221},{"x":0.4625,"y":0.3901},{"x":0.4596,"y":0.39308},{"x":0.4603,"y":0.39495},{"x":0.45898,"y":0.39694},{"x":0.45907,"y":0.39968},{"x":0.41524,"y":0.44623},{"x":0.4126,"y":0.44623},{"x":0.41075,"y":0.44835},{"x":0.40908,"y":0.45022},{"x":0.40829,"y":0.45208},{"x":0.40767,"y":0.4542},{"x":0.40741,"y":0.45507},{"x":0.38796,"y":0.47548},{"x":0.37792,"y":0.46988},{"x":0.37792,"y":0.4659}],
    "A":[{"x":0.31288,"y":0.49901},{"x":0.33726,"y":0.47337},{"x":0.37775,"y":0.49478},{"x":0.37783,"y":0.50959},{"x":0.37493,"y":0.51283},{"x":0.37502,"y":0.51893},{"x":0.37088,"y":0.52328},{"x":0.36798,"y":0.52266},{"x":0.36674,"y":0.52353},{"x":0.36657,"y":0.52428},{"x":0.36701,"y":0.52502},{"x":0.36604,"y":0.52627},{"x":0.3656,"y":0.52702},{"x":0.36578,"y":0.52851},{"x":0.36551,"y":0.52876},{"x":0.36542,"y":0.52926},{"x":0.36331,"y":0.53125},{"x":0.35918,"y":0.52938},{"x":0.35821,"y":0.53025},{"x":0.34289,"y":0.52204},{"x":0.33805,"y":0.52627},{"x":0.3355,"y":0.52527},{"x":0.33497,"y":0.52552},{"x":0.31904,"y":0.51743},{"x":0.31904,"y":0.51108},{"x":0.31587,"y":0.50934},{"x":0.3157,"y":0.50747},{"x":0.31297,"y":0.50598}],

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
    // Get current image display dimensions
    const img = document.getElementById('campusMap');
    const rect = img.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    const scaledPoints = points.map(p => ({
        x: p.x * displayWidth,
        y: p.y * displayHeight
    }));
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
// Helper: Check if current day matches day range (e.g., "Mon-Wed", "Tue-Thu", "Saturday")
function isDayInRange(dayRange, currentDay) {
    if (!dayRange) return false;
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayRangeLower = dayRange.toLowerCase().trim();
    
    // Handle single day
    if (!dayRangeLower.includes('-') && !dayRangeLower.includes(' and ')) {
        // Check if current day matches
        for (const d of days) {
            if (dayRangeLower.includes(d.toLowerCase())) {
                return d === currentDay;
            }
        }
        return false;
    }
    
    // Handle range like "Mon-Wed" or "Mon and Wed" or "Tue - Thu"
    let startDay, endDay;
    
    if (dayRangeLower.includes(' and ')) {
        // "Mon and Wed" -> check both days
        const parts = dayRangeLower.split(' and ');
        for (const part of parts) {
            const dayMatch = days.find(d => part.includes(d.toLowerCase()));
            if (dayMatch === currentDay) return true;
        }
        return false;
    }
    
    // Handle "Mon-Wed" or "Mon - Wed"
    const rangeParts = dayRangeLower.split(/[-–—]\s*/);
    if (rangeParts.length === 2) {
        startDay = rangeParts[0].trim();
        endDay = rangeParts[1].trim();
        
        // Find indices
        let startIndex = -1, endIndex = -1;
        for (let i = 0; i < days.length; i++) {
            if (startDay.includes(days[i].toLowerCase())) startIndex = i;
            if (endDay.includes(days[i].toLowerCase())) endIndex = i;
        }
        
        if (startIndex === -1 || endIndex === -1) return false;
        
        const currentIndex = days.indexOf(currentDay);
        
        // Handle wrap-around (e.g., Sun-Wed)
        if (startIndex <= endIndex) {
            return currentIndex >= startIndex && currentIndex <= endIndex;
        } else {
            // Wrap around (e.g., Thu-Sun)
            return currentIndex >= startIndex || currentIndex <= endIndex;
        }
    }
    
    return false;
}

// Helper: Parse time string like "9:30 AM" to minutes since midnight
function parseTimeToMinutes(timeStr) {
    if (!timeStr) return null;
    
    // Clean up
    timeStr = timeStr.trim().toLowerCase();
    
    // Handle "12:00 pm – 4:00 pm" format
    const timePattern = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)/;
    const match = timeStr.match(timePattern);
    if (!match) return null;
    
    let hours = parseInt(match[1]);
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const period = match[3];
    
    if (period === 'pm' && hours !== 12) hours += 12;
    if (period === 'am' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
}

// Helper: Check if current time falls within a time range
function isTimeInRange(timeRange, currentMinutes) {
    if (!timeRange) return false;
    
    // Handle multiple time ranges separated by comma or semicolon
    const ranges = timeRange.split(/[,;]/);
    for (const range of ranges) {
        const trimmed = range.trim();
        
        // Find start and end times
        const parts = trimmed.split(/[-–—]/);
        if (parts.length !== 2) continue;
        
        const startMinutes = parseTimeToMinutes(parts[0].trim());
        const endMinutes = parseTimeToMinutes(parts[1].trim());
        
        if (startMinutes === null || endMinutes === null) continue;
        
        // Check if current time is within range
        if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
            return true;
        }
    }
    
    return false;
}

// Main: Check if faculty is currently available based on office hours
function checkAvailability(officeHours) {
    if (!officeHours || officeHours.length === 0) return null;
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const now = new Date();
    const currentDay = days[now.getDay()];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    for (const slot of officeHours) {
        const dayRange = slot.day;
        const timeRange = slot.time;
        
        // Skip if no day or time
        if (!dayRange || !timeRange) continue;
        
        // Check if current day matches
        if (!isDayInRange(dayRange, currentDay)) continue;
        
        // Check if current time falls within range
        if (isTimeInRange(timeRange, currentMinutes)) {
            return true;
        }
    }
    return false;
}

async function fetchBuildingFaculty(buildingCode) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<div class="loading-spinner">Loading building faculty...</div>';
    
    try {
        const response = await fetch(`${API_URL}/building-faculty?building=${encodeURIComponent(buildingCode)}`);
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            resultsDiv.innerHTML = `<p class="empty-state">No faculty found in Building ${buildingCode}</p>`;
            return;
        }
        
        // Display results with building color
        const buildingColor = buildingColors[buildingCode]?.text || '#3b82f6';
        resultsDiv.innerHTML = `
            <div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid ${buildingColor};">
                <strong style="color: ${buildingColor};">Building ${buildingCode}</strong> — ${data.results.length} faculty members
            </div>
            ${data.results.map((f, index) => `
                <div class="result-card" onclick="highlightBuilding('${f.building || ''}', null, '${escapeJs(f.name || '')}', '${escapeJs(f.office || '')}')" style="animation-delay: ${index * 0.03}s;">
                    <div class="result-name" style="color: ${buildingColor};">${escapeHtml(f.name || 'Unknown')}</div>
                    <div class="result-title">${escapeHtml(f.title || '')}</div>
                    ${f.office ? `<div class="result-office">Office: ${escapeHtml(f.office)}</div>` : ''}
                    ${f.school ? `<div class="result-building">${escapeHtml(f.school)}</div>` : ''}
                    ${f.office_hours && f.office_hours.length > 0 ? `
                        <div class="result-office-hours" style="font-size: 11px; color: #a0a0a0; margin-top: 4px; border-top: 1px solid #333; padding-top: 4px;">
                            ${f.office_hours.map(h => `${h.day}: ${h.time}`).join(' | ')}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        `;
        
        // Highlight the building on the map
        highlightBuilding(buildingCode, null, null, null);
        
    } catch (error) {
        console.error('Error fetching building faculty:', error);
        resultsDiv.innerHTML = '<p class="empty-state" style="color: #ef4444;">Error loading building data. Please try again.</p>';
    }
}

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
            const isAvailable = f.office_hours && f.office_hours.length > 0 ? checkAvailability(f.office_hours) : null;

            let availabilityHTML = '';
            if (isAvailable === true) {
                availabilityHTML = `<div style="margin-top: 4px;"><span style="color: #10b981; font-size: 11px; font-weight: 600;">● Available Now</span></div>`;
            } else if (isAvailable === false) {
                availabilityHTML = `<div style="margin-top: 4px;"><span style="color: #ef4444; font-size: 11px; font-weight: 400;">● Currently Unavailable</span></div>`;
            } else if (f.office_hours && f.office_hours.length > 0) {
                availabilityHTML = `<div style="margin-top: 4px;"><span style="color: #888; font-size: 11px;">Office hours available</span></div>`;
            }
            return `
                <div class="result-card" onclick="highlightBuilding('${f.building || ''}', '${roomNum || ''}', '${escapeJs(f.name || '')}', '${escapeJs(f.office || '')}')" style="animation-delay: ${delay}s;">
                    <div class="result-name" style="color: ${buildingColor};">${escapeHtml(f.name || 'Unknown')}</div>
                    <div class="result-title">${escapeHtml(f.title || '')}</div>
                    ${f.office ? `<div class="result-office">Office: ${escapeHtml(f.office)}</div>` : ''}
                    ${f.building ? `<div class="result-building">${escapeHtml((buildingNames[f.building] || f.building).replace(/<br>/g, ' '))}</div>` : ''}
                    ${availabilityHTML}
                    ${f.office_hours && f.office_hours.length > 0 ? `
                        <div class="result-office-hours" style="font-size: 11px; color: #a0a0a0; margin-top: 4px; border-top: 1px solid #333; padding-top: 4px;">
                            ${f.office_hours.map(h => `${h.day}: ${h.time}`).join(' | ')}
                        </div>
                    ` : ''}
                    
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
        const img = document.getElementById('campusMap');
        const rect = img.getBoundingClientRect();
        const displayWidth = rect.width;
        const displayHeight = rect.height;

        const scaledPoints = points.map(p => {
            const x = p.x * displayWidth;
            const y = p.y * displayHeight;
            return `${x},${y}`;
        }).join(' ');
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
        // Add click event to show all faculty in this building
        hitPoly.addEventListener('click', (e) => {
            e.stopPropagation();
            // Prevent click if building is currently highlighted from search
            if (activeHighlights[buildingCode]) {
                // Optionally, you can still allow click but maybe flash or do nothing
                // For now, we'll just call the function anyway to show faculty
            }
            fetchBuildingFaculty(buildingCode);
        });
    }
}

function updateHoverAreas() {
    if (!window.hoverOverlays) return;
    
    // Get current image display dimensions
    const img = document.getElementById('campusMap');
    const rect = img.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;
    
    for (const [code, d] of Object.entries(window.hoverOverlays)) {
        // Scale percentage coordinates (0-1) to current display pixels
        const scaled = d.points.map(p => {
            const x = p.x * displayWidth;
            const y = p.y * displayHeight;
            return `${x},${y}`;
        }).join(' ');
        
        d.hitPoly.setAttribute('points', scaled);
        d.borderPoly.setAttribute('points', scaled);
    }
}

img.onload = () => {
    updateScale();
    addBuildingTooltips();  // Add this line
};