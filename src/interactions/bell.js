import { playBellChime } from '../audio.js';
import { t } from '../i18n.js';

export function renderBellInteraction(containerEl) {
  containerEl.innerHTML = `
    <div class="micro-bell-box">
      <div class="bell-visual-wrap" id="bell-interactive-target">
        <svg class="bell-icon-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Bell Hanger -->
          <rect x="44" y="8" width="12" height="14" rx="3" fill="#6E533F"/>
          <!-- Bell Body -->
          <path d="M50 20 C32 20 25 50 20 75 C20 78 23 82 28 82 L72 82 C77 82 80 78 80 75 C75 50 68 20 50 20 Z" fill="#C59B27" stroke="#8C6611" stroke-width="2"/>
          <!-- Bell Rim -->
          <ellipse cx="50" cy="82" rx="26" ry="6" fill="#A87E18"/>
          <!-- Bell Clapper -->
          <circle cx="50" cy="87" r="6" fill="#5E430B"/>
          <!-- Ancient Dragon Inscription Motif -->
          <path d="M35 52 Q50 44 65 52" stroke="#8C6611" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <p style="font-size: 13px; color: var(--ink-light); margin-top: 8px;">
        ${t('microBellHint')}
      </p>
    </div>
  `;

  const bellWrap = containerEl.querySelector('#bell-interactive-target');
  const bellSvg = containerEl.querySelector('.bell-icon-svg');

  bellWrap.addEventListener('click', (e) => {
    // Play sound
    playBellChime();

    // Trigger swing
    bellSvg.classList.remove('ringing');
    void bellSvg.offsetWidth; // reflow
    bellSvg.classList.add('ringing');

    // Create ripple
    const ripple = document.createElement('div');
    ripple.className = 'bell-ripple';
    bellWrap.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
}
