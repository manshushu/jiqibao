import { playWaterStream } from '../audio.js';
import { t } from '../i18n.js';

export function renderBridgeInteraction(containerEl) {
  containerEl.innerHTML = `
    <div class="micro-bridge-box" id="bridge-water-stage" role="button" tabindex="0" aria-label="${t('microBridgeHint')}">
      <svg viewBox="0 0 320 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; pointer-events: none;">
        <defs>
          <linearGradient id="bridgeRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#DCE7E3"/>
            <stop offset="55%" stop-color="#6B968B"/>
            <stop offset="100%" stop-color="#487066"/>
          </linearGradient>
        </defs>
        <!-- Sky & Mist Background -->
        <rect width="320" height="72" fill="#F4EDE1"/>
        <!-- River Water -->
        <rect y="64" width="320" height="66" fill="url(#bridgeRiverGrad)"/>
        <!-- Water Wave Lines -->
        <path d="M10 86 Q80 80 160 86 T310 84" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none"/>
        <path d="M25 106 Q105 100 185 106 T305 104" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/>

        <!-- Gliding Wooden Boat -->
        <g id="bridge-boat-el" style="transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);">
          <path d="M128 84 L192 84 L182 94 L138 94 Z" fill="#5A3E28"/>
          <path d="M144 84 C148 73 172 73 176 84 Z" fill="#3B2818"/>
          <line x1="184" y1="88" x2="198" y2="96" stroke="#7A563B" stroke-width="2" stroke-linecap="round"/>
        </g>

        <!-- Three-Arch Stone Bridge Silhouette -->
        <path d="M0 68 Q160 22 320 68 L320 76 L262 76 A24 22 0 0 0 214 76 L202 76 A42 36 0 0 0 118 76 L106 76 A24 22 0 0 0 58 76 L0 76 Z" fill="#D5C7B2" stroke="#5E4E3E" stroke-width="2"/>
        <!-- Bridge Balustrade Posts -->
        <line x1="80" y1="45" x2="80" y2="53" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="120" y1="36" x2="120" y2="45" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="160" y1="32" x2="160" y2="42" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="200" y1="36" x2="200" y2="45" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="240" y1="45" x2="240" y2="53" stroke="#5E4E3E" stroke-width="2"/>
      </svg>
      <div class="bridge-ripple-layer" id="bridge-ripple-layer"></div>
      <div class="micro-overlay-hint">
        <span>${t('microBridgeHint')}</span>
      </div>
    </div>
  `;

  const stage = containerEl.querySelector('#bridge-water-stage');
  const boat = containerEl.querySelector('#bridge-boat-el');
  const rippleLayer = containerEl.querySelector('#bridge-ripple-layer');
  let boatPos = 0;
  const positions = [-52, 0, 52, -26, 26];
  let stepIdx = 0;

  function triggerBridgeWave(e) {
    playWaterStream();

    // Move boat gently across arches
    stepIdx = (stepIdx + 1) % positions.length;
    boatPos = positions[stepIdx];
    if (boat) {
      boat.style.transform = `translateX(${boatPos}px)`;
    }

    // Spawn water ripple at tap position or center
    if (rippleLayer && stage) {
      const rect = stage.getBoundingClientRect();
      const clientX = e && (e.touches ? e.touches[0].clientX : e.clientX);
      const clientY = e && (e.touches ? e.touches[0].clientY : e.clientY);
      const rx = clientX ? Math.max(30, Math.min(rect.width - 30, clientX - rect.left)) : rect.width / 2;
      const ry = clientY ? Math.max(70, Math.min(rect.height - 16, clientY - rect.top)) : rect.height * 0.72;

      const ripple = document.createElement('span');
      ripple.className = 'bridge-water-ripple';
      ripple.style.left = `${rx}px`;
      ripple.style.top = `${ry}px`;
      rippleLayer.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1100);
    }
  }

  if (stage) {
    stage.addEventListener('click', triggerBridgeWave);
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerBridgeWave(null);
      }
    });
  }
}
