/**
 * Dynamic SVG Placeholder Generator for spots and covers.
 * Clean, elegant watercolor background with traditional calligraphy branding.
 */

export function createSpotPlaceholder(nameZh, nameEn, order) {
  const bgColors = [
    ['#F4EDE1', '#DFD3C3'], // Bell tower
    ['#EAE6DF', '#CFD8D3'], // Bridge
    ['#F6EFE9', '#EAD5C3'], // Mutton
    ['#FDF6ED', '#F0DFCA'], // Sweets
    ['#FBF5E6', '#EADBB6'], // Sugar art
    ['#EDE7DD', '#D3C7B6'], // Puppet
    ['#E4EBEC', '#CBD7D8']  // New Qibao
  ];

  const colorPair = bgColors[(order - 1) % bgColors.length] || ['#F4EDE1', '#DFD3C3'];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colorPair[0]}"/>
        <stop offset="100%" stop-color="${colorPair[1]}"/>
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/>
      </filter>
    </defs>
    <rect width="600" height="400" fill="url(#grad)"/>
    
    <!-- Decorative Water Patterns -->
    <path d="M0,280 C150,260 300,310 450,280 C520,265 570,275 600,285 L600,400 L0,400 Z" fill="#5E8B7E" fill-opacity="0.15"/>
    <path d="M0,320 C180,300 320,350 480,320 C540,310 580,320 600,330 L600,400 L0,400 Z" fill="#5E8B7E" fill-opacity="0.2"/>

    <!-- Decorative Border -->
    <rect x="24" y="24" width="552" height="352" fill="none" stroke="#2F3E46" stroke-width="1.5" stroke-opacity="0.25" rx="10"/>

    <!-- Traditional Seal Motif -->
    <g transform="translate(480, 50)" filter="url(#shadow)">
      <rect width="64" height="64" rx="8" fill="#B5352B"/>
      <text x="32" y="44" font-family="serif" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle">宝</text>
    </g>

    <!-- Spot Index Badge -->
    <text x="50" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#5E8B7E" letter-spacing="2">0${order} · 七宝风物</text>

    <!-- Spot Title (Chinese) -->
    <text x="50" y="160" font-family="'Songti SC', 'Noto Serif SC', serif" font-size="44" font-weight="bold" fill="#2F3E46" letter-spacing="3">${nameZh}</text>

    <!-- Spot Title (English) -->
    <text x="50" y="200" font-family="sans-serif" font-size="20" fill="#596D76" font-weight="500">${nameEn}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function createCoverPlaceholder() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 1280" width="100%" height="100%">
    <defs>
      <linearGradient id="coverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FBF7F0"/>
        <stop offset="40%" stop-color="#F4EDE1"/>
        <stop offset="80%" stop-color="#E2D4C0"/>
        <stop offset="100%" stop-color="#C5B29B"/>
      </linearGradient>
    </defs>
    <rect width="720" height="1280" fill="url(#coverGrad)"/>

    <!-- River Curve (Puhuitang) -->
    <path d="M-50,600 Q200,680 400,620 T800,700 L800,1280 L-50,1280 Z" fill="#5E8B7E" fill-opacity="0.22"/>
    <path d="M-50,750 Q250,820 500,780 T800,850 L800,1280 L-50,1280 Z" fill="#5E8B7E" fill-opacity="0.3"/>

    <!-- Stone Arch Bridge Silhouette -->
    <path d="M220,670 Q360,560 500,670 Q440,680 360,680 Q280,680 220,670 Z" fill="#2F3E46" fill-opacity="0.35"/>

    <!-- Ambient Moon/Lantern -->
    <circle cx="560" cy="280" r="80" fill="#E0A030" fill-opacity="0.3"/>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
