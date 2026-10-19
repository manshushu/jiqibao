/**
 * Vector Hand-Drawn Style SVG Map of Qibao Ancient Town.
 * ViewBox (0 0 440 760) matching mobile 9:16 viewport.
 * Hotspot positions are dynamically computed from spots.json (map.x, map.y).
 */

import { t } from './i18n.js';

const VIEW_WIDTH = 440;
const VIEW_HEIGHT = 760;

export function getQibaoSchematicSvg(spots = [], collected = [], lang = 'zh') {
  const isEn = lang === 'en';

  // Generate SVG Hotspots from spots.json percentage coordinates
  const hotspotsSvg = spots.map(spot => {
    const pctX = spot.map && typeof spot.map.x === 'number' ? spot.map.x : 50;
    const pctY = spot.map && typeof spot.map.y === 'number' ? spot.map.y : 50;
    const cx = Math.round((pctX / 100) * VIEW_WIDTH);
    const cy = Math.round((pctY / 100) * VIEW_HEIGHT);

    const isCollected = collected.includes(spot.id);
    const name = spot.name[lang] || spot.name.zh;
    const fontSize = isEn ? 11.5 : 13;
    const labelWidth = isEn
      ? Math.max(96, Math.round(name.length * 6.6 + 22))
      : Math.max(88, Math.round(name.length * 14.5 + 24));
    const halfW = Math.round(labelWidth / 2);
    const labelOffset = Math.max(halfW + 8, Math.min(VIEW_WIDTH - halfW - 8, cx)) - cx;

    return `
      <g class="svg-map-hotspot ${isCollected ? 'collected' : 'uncollected'}" 
         data-spot-id="${spot.id}"
         role="button"
         tabindex="0"
         aria-label="${name}"
         transform="translate(${cx}, ${cy})"
         style="cursor: pointer;">
        
        <!-- 48x48 Invisible Hit Area for >= 44px Touch Accessibility -->
        <rect x="-32" y="-32" width="64" height="64" fill="transparent"/>

        <!-- Ripple Pulse Circle -->
        <circle class="hotspot-ping-wave" cx="0" cy="0" r="28" fill="${isCollected ? '#B5352B' : '#E0A030'}" fill-opacity="${isCollected ? '0.15' : '0.4'}"/>
        
        <!-- Main Circular Badge -->
        <circle cx="0" cy="0" r="22" fill="${isCollected ? '#B5352B' : '#FFF9EE'}" stroke="${isCollected ? '#821E17' : '#D18E1E'}" stroke-width="3" filter="url(#hotspotShadow)"/>
        
        <!-- Icon Symbol inside Badge -->
        <text x="0" y="7" text-anchor="middle" font-family="'Songti SC', 'Noto Serif SC', serif" font-size="18" font-weight="900" fill="${isCollected ? '#FFFFFF' : '#8A5808'}">
          ${isCollected ? '✓' : '宝'}
        </text>

        <!-- Order Number Bubble -->
        <g transform="translate(15, -15)">
          <circle cx="0" cy="0" r="9" fill="#2F3E46"/>
          <text x="0" y="3.5" text-anchor="middle" font-family="'PingFang SC', sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">
            ${spot.order}
          </text>
        </g>

        <!-- Dynamic-Width Label Banner Below Hotspot -->
        <g transform="translate(${labelOffset}, 35)">
          <rect x="${-halfW}" y="-13" width="${labelWidth}" height="26" rx="13" fill="#FCF8F2" fill-opacity="0.96" stroke="#2F3E46" stroke-width="1.5" filter="url(#hotspotShadow)"/>
          <text x="0" y="4" text-anchor="middle" font-family="'PingFang SC', sans-serif" font-size="${fontSize}" font-weight="bold" fill="#2F3E46">
            ${name}
          </text>
        </g>
      </g>
    `;
  }).join('');

  const streetSignsSvg = isEn
    ? `
      <rect x="192" y="192" width="56" height="24" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="208" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2F3E46" text-anchor="middle">${t('mapNorthSt')}</text>

      <rect x="192" y="455" width="56" height="24" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="471" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#B5352B" text-anchor="middle">${t('mapSouthSt')}</text>
    `
    : `
      <rect x="206" y="180" width="28" height="60" rx="4" fill="#FFFFFF" fill-opacity="0.9" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="198" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">北</text>
      <text x="220" y="215" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">大</text>
      <text x="220" y="232" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">街</text>

      <rect x="206" y="440" width="28" height="60" rx="4" fill="#FFFFFF" fill-opacity="0.9" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="458" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">南</text>
      <text x="220" y="475" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">大</text>
      <text x="220" y="492" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">街</text>
    `;

  return `
  <svg viewBox="0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="map-svg" preserveAspectRatio="xMidYMid meet" role="group" aria-label="${t('mapTownArch')}">
    <defs>
      <!-- Rice Paper Parchment Base -->
      <linearGradient id="mapParchment" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF5EC"/>
        <stop offset="50%" stop-color="#F4ECE1"/>
        <stop offset="100%" stop-color="#ECE3D3"/>
      </linearGradient>

      <!-- Water Flow Gradient -->
      <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#558376" stop-opacity="0.6"/>
        <stop offset="50%" stop-color="#6E9A8E" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#4B7468" stop-opacity="0.6"/>
      </linearGradient>

      <!-- Cobblestone Street Gradient -->
      <linearGradient id="streetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#DDD3C3"/>
        <stop offset="100%" stop-color="#CEC2AE"/>
      </linearGradient>

      <filter id="hotspotShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Map Background -->
    <rect width="${VIEW_WIDTH}" height="${VIEW_HEIGHT}" fill="url(#mapParchment)"/>

    <!-- Courtyard & Architecture Blocks (Background Context) -->
    <g fill="#43555D" fill-opacity="0.08" stroke="#2F3E46" stroke-opacity="0.18" stroke-width="1.5">
      <!-- North-West Block -->
      <rect x="25" y="100" width="150" height="70" rx="4"/>
      <rect x="25" y="190" width="150" height="90" rx="4"/>
      <!-- North-East Block (Modern Vanke & Powerlong Hub) -->
      <rect x="265" y="90" width="150" height="85" rx="8" fill="#5E8B7E" fill-opacity="0.14" stroke="#5E8B7E" stroke-opacity="0.35"/>
      <rect x="265" y="195" width="150" height="90" rx="4"/>

      <!-- South-West Block -->
      <rect x="25" y="460" width="150" height="95" rx="4"/>
      <rect x="25" y="565" width="150" height="95" rx="4"/>
      <!-- South-East Block -->
      <rect x="265" y="460" width="150" height="95" rx="4"/>
      <rect x="265" y="565" width="150" height="95" rx="4"/>
    </g>

    <!-- Chinese Roof Eaves Accents (Ma-tou Walls) -->
    <g stroke="#2F3E46" stroke-width="2" stroke-opacity="0.35" fill="none">
      <path d="M25 100 L45 92 L65 100"/>
      <path d="M110 100 L130 92 L150 100"/>
      <path d="M25 460 L45 452 L65 460"/>
      <path d="M265 460 L285 452 L305 460"/>
    </g>

    <!-- Main Axis: North Street (北大街) -->
    <rect x="195" y="70" width="50" height="280" fill="url(#streetGrad)" rx="4"/>
    <!-- Main Axis: South Street (南大街) -->
    <rect x="195" y="410" width="50" height="285" fill="url(#streetGrad)" rx="4"/>

    <!-- "非"-Shaped Lateral Alleys (横向支巷) -->
    <g fill="url(#streetGrad)">
      <!-- North Alleys -->
      <rect x="35" y="125" width="165" height="26" rx="3"/>
      <rect x="240" y="130" width="165" height="26" rx="3"/>
      <rect x="35" y="245" width="165" height="26" rx="3"/>
      <rect x="240" y="245" width="165" height="26" rx="3"/>

      <!-- South Alleys -->
      <rect x="35" y="515" width="165" height="26" rx="3"/>
      <rect x="240" y="515" width="165" height="26" rx="3"/>
      <rect x="35" y="625" width="165" height="26" rx="3"/>
      <rect x="240" y="625" width="165" height="26" rx="3"/>
    </g>

    <!-- Puhuitang River (蒲汇塘水系横贯全屏) -->
    <g id="river-layer">
      <!-- Water Bed -->
      <path d="M-10,345 C90,335 150,355 220,355 C290,355 350,335 450,345 L450,415 C350,405 290,425 220,425 C150,425 90,405 -10,415 Z" fill="url(#waterFlow)"/>

      <!-- River Wave Waterlines -->
      <path d="M0,365 Q110,350 220,365 T440,360" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2" fill="none"/>
      <path d="M0,385 Q130,370 260,385 T440,380" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2" fill="none"/>
      <path d="M0,405 Q110,390 220,405 T440,400" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="2" fill="none"/>

      <!-- River Text Watermark -->
      <text x="${isEn ? 28 : 52}" y="386" font-family="'Songti SC', serif" font-size="${isEn ? 14 : 18}" font-weight="bold" fill="#2F3E46" fill-opacity="0.55" letter-spacing="${isEn ? 1 : 5}">${t('mapRiverName')}</text>
    </g>

    <!-- Centerpiece: Puhuitang Stone Bridge (蒲汇塘桥) -->
    <g id="puhuitang-bridge-visual">
      <!-- Bridge Body -->
      <path d="M190,345 C200,340 240,340 250,345 L250,415 C240,420 200,420 190,415 Z" fill="#E8E0D2" stroke="#5E4E3E" stroke-width="2.5"/>

      <!-- Three Arch Openings on Water -->
      <path d="M205,378 Q210,370 215,378 Z" fill="#2E4A43"/>
      <path d="M217,385 Q222,374 227,385 Z" fill="#2E4A43"/>
      <path d="M229,392 Q234,384 239,392 Z" fill="#2E4A43"/>

      <!-- Bridge Balustrades -->
      <line x1="192" y1="345" x2="192" y2="415" stroke="#7A6855" stroke-width="2.5"/>
      <line x1="248" y1="345" x2="248" y2="415" stroke="#7A6855" stroke-width="2.5"/>
    </g>

    <!-- Riverside Green Willows (杨柳依依) -->
    <g fill="#628F6E" fill-opacity="0.8">
      <circle cx="160" cy="342" r="14"/>
      <circle cx="174" cy="338" r="10"/>
      <circle cx="280" cy="422" r="15"/>
      <circle cx="295" cy="426" r="11"/>
    </g>

    <!-- North Paifang Archway (北大街牌坊) -->
    <g transform="translate(175, 56)">
      <rect x="0" y="0" width="90" height="20" rx="3" fill="#B5352B"/>
      <text x="45" y="14" font-family="'Songti SC', serif" font-size="${isEn ? 10 : 11}" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="${isEn ? 0.5 : 1.5}">${t('mapTownArch')}</text>
      <rect x="10" y="20" width="6" height="14" fill="#6E533F"/>
      <rect x="74" y="20" width="6" height="14" fill="#6E533F"/>
    </g>

    <!-- Street Badges -->
    ${streetSignsSvg}

    <!-- Modern District Tag (Top Right) -->
    <text x="340" y="103" font-family="'PingFang SC', sans-serif" font-size="11.5" font-weight="bold" fill="#426C60" text-anchor="middle">${t('mapModernHub')}</text>

    <!-- Compass Rose (Top Right Safe Zone) -->
    <g transform="translate(376, 76)">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#2F3E46" stroke-opacity="0.3" stroke-width="1.5"/>
      <polygon points="0,-12 3,0 0,-2 -3,0" fill="#B5352B"/>
      <polygon points="0,12 3,0 0,2 -3,0" fill="#2F3E46" fill-opacity="0.4"/>
      <text x="0" y="-16" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#B5352B" text-anchor="middle">${t('mapCompassNorth')}</text>
    </g>

    <!-- Interactive Hotspots Layer -->
    <g id="svg-hotspots-group">
      ${hotspotsSvg}
    </g>
  </svg>
  `;
}
