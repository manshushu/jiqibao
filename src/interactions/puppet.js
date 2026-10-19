import { t } from '../i18n.js';

export function renderPuppetInteraction(containerEl) {
  containerEl.innerHTML = `
    <div class="micro-puppet-box">
      <div class="puppet-actor" id="puppet-target">
        <svg viewBox="0 0 100 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <!-- Operating Bamboo Rods -->
          <line x1="15" y1="160" x2="48" y2="70" stroke="#3A2518" stroke-width="2.5"/>
          <line x1="85" y1="160" x2="52" y2="70" stroke="#3A2518" stroke-width="2.5"/>

          <!-- Shadow Figure Silhouette (Traditional Scholar/General) -->
          <!-- Hat -->
          <path d="M35 22 C35 12 65 12 65 22 L72 26 L28 26 Z" fill="#7A1D16"/>
          <circle cx="50" cy="12" r="5" fill="#C59B27"/>
          <!-- Head profile -->
          <circle cx="50" cy="34" r="12" fill="#1D2A30"/>
          <!-- Beard / Ribbon -->
          <path d="M42 42 Q38 58 44 62" stroke="#1D2A30" stroke-width="2" fill="none"/>
          <!-- Body & Robe -->
          <path d="M36 46 L64 46 L74 110 L26 110 Z" fill="#91271F" stroke="#1D2A30" stroke-width="2"/>
          <!-- Belt -->
          <rect x="34" y="68" width="32" height="8" rx="2" fill="#C59B27"/>
          <!-- Robe Hem Patterns -->
          <path d="M30 96 Q50 90 70 96" stroke="#C59B27" stroke-width="2" fill="none"/>
          <!-- Boots -->
          <rect x="36" y="110" width="10" height="24" rx="3" fill="#1D2A30"/>
          <rect x="54" y="110" width="10" height="24" rx="3" fill="#1D2A30"/>
        </svg>
      </div>
      <div style="position: absolute; bottom: 6px; left: 0; right: 0; text-align: center; pointer-events: none;">
        <span style="font-size: 11px; color: #594D3B; background: rgba(255, 255, 255, 0.7); padding: 2px 8px; border-radius: 10px;">
          ${t('microPuppetHint')}
        </span>
      </div>
    </div>
  `;

  const puppet = containerEl.querySelector('#puppet-target');
  const stage = containerEl.querySelector('.micro-puppet-box');

  let isDragging = false;
  let startX = 0;
  let currentOffset = 0;

  function startDrag(clientX) {
    isDragging = true;
    startX = clientX - currentOffset;
  }

  function moveDrag(clientX) {
    if (!isDragging) return;
    const stageWidth = stage.offsetWidth;
    const maxOffset = stageWidth / 2 - 45;

    let targetX = clientX - startX;
    targetX = Math.max(-maxOffset, Math.min(maxOffset, targetX));

    const delta = targetX - currentOffset;
    currentOffset = targetX;

    const tilt = Math.max(-15, Math.min(15, delta * 3));
    puppet.style.transform = `translateX(calc(-50% + ${currentOffset}px)) rotate(${tilt}deg)`;
  }

  function endDrag() {
    isDragging = false;
    puppet.style.transform = `translateX(calc(-50% + ${currentOffset}px)) rotate(0deg)`;
  }

  const onMouseMove = (e) => moveDrag(e.clientX);
  const onTouchMove = (e) => {
    if (e.touches && e.touches.length) {
      moveDrag(e.touches[0].clientX);
    }
  };

  puppet.addEventListener('mousedown', (e) => startDrag(e.clientX));
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', endDrag);

  puppet.addEventListener('touchstart', (e) => {
    startDrag(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('touchend', endDrag);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', endDrag);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', endDrag);
  };
}
