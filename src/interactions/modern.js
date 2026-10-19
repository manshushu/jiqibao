import { playModernChord } from '../audio.js';
import { t } from '../i18n.js';

export function renderModernInteraction(containerEl) {
  containerEl.innerHTML = `
    <div class="micro-modern-box" id="modern-skyline-stage" role="button" tabindex="0" aria-label="${t('microModernHint')}">
      <svg viewBox="0 0 320 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; pointer-events: none;">
        <!-- Split Twilight & Warm Gallery Sky -->
        <rect width="320" height="130" class="modern-sky-bg" fill="#EAE2D3"/>

        <!-- Glow Orbs (Illuminated on click) -->
        <circle cx="228" cy="48" r="38" class="modern-glow-orb" fill="#FAD06C" fill-opacity="0"/>
        <circle cx="96" cy="56" r="28" class="modern-glow-orb" fill="#E05A47" fill-opacity="0"/>

        <!-- Left Side: Traditional Water-Town Roof Eaves -->
        <g transform="translate(18, 42)">
          <path d="M4 58 L4 26 L92 26 L92 58 Z" fill="#F7F2E9" stroke="#2F3E46" stroke-width="2"/>
          <path d="M-4 28 Q48 8 100 28 L94 18 Q48 2 2 18 Z" fill="#2F3E46"/>
          <!-- Warm Lantern on Eave -->
          <circle cx="88" cy="34" r="6" class="modern-window-light" fill="#B5352B"/>
          <rect x="24" y="36" width="18" height="22" class="modern-window-light" fill="#596D76"/>
          <rect x="54" y="36" width="18" height="22" class="modern-window-light" fill="#596D76"/>
        </g>

        <!-- Center Connecting Footbridge -->
        <path d="M114 96 Q148 82 182 96" stroke="#5E8B7E" stroke-width="3" fill="none"/>

        <!-- Right Side: Modern Art Museum & Plaza Ribbon Architecture -->
        <g transform="translate(172, 26)">
          <rect x="0" y="16" width="124" height="58" rx="6" fill="#FFFDF9" stroke="#2F3E46" stroke-width="2"/>
          <!-- Curved Contemporary Facade Bands -->
          <path d="M0 32 L124 24" stroke="#5E8B7E" stroke-width="3"/>
          <path d="M0 48 L124 40" stroke="#B5352B" stroke-width="2.5"/>
          <!-- Gallery Glass Windows -->
          <rect x="14" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
          <rect x="48" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
          <rect x="82" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
        </g>

        <!-- Ground Baseline -->
        <line x1="12" y1="100" x2="308" y2="100" stroke="#2F3E46" stroke-width="2"/>
      </svg>
      <div class="micro-overlay-hint">
        <span>${t('microModernHint')}</span>
      </div>
    </div>
  `;

  const stage = containerEl.querySelector('#modern-skyline-stage');
  let lit = false;

  function toggleIlluminate() {
    playModernChord();
    lit = !lit;
    if (stage) {
      stage.classList.toggle('illuminated', lit);
    }
  }

  if (stage) {
    stage.addEventListener('click', toggleIlluminate);
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleIlluminate();
      }
    });
  }
}
