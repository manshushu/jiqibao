import { setScreen } from '../state.js';
import { t } from '../i18n.js';

let currentCardIdx = 0;
let selectedTreasureIdx = 0;

const TREASURE_ICONS = [
  // 1. 金字莲花经 (Lotus Sutra Scroll)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="7" width="22" height="26" rx="2"/><line x1="14" y1="13" x2="26" y2="13"/><line x1="14" y1="19" x2="26" y2="19"/><path d="M16 26 Q20 22 24 26"/></svg>`,
  // 2. 神树 (Sacred Catalpa Tree)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 34 V21"/><path d="M12 22 C8 16 14 8 20 10 C26 8 32 16 28 22 Z"/><line x1="15" y1="34" x2="25" y2="34"/></svg>`,
  // 3. 氽来钟 (Floating Bell)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9 C13 9 11 20 9 29 H31 C29 20 27 9 20 9 Z"/><circle cx="20" cy="32" r="2.5"/><path d="M8 35 Q20 32 32 35"/></svg>`,
  // 4. 飞来佛 (Flying Buddha)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="14" r="4"/><path d="M13 29 C13 21 27 21 27 29 Z"/><path d="M10 32 Q20 35 30 32"/></svg>`,
  // 5. 金鸡 (Golden Rooster)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 26 C15 18 22 14 26 17 C29 19 28 26 22 28 Z"/><path d="M24 14 L26 11 L28 15"/><path d="M15 24 Q10 20 11 27"/><line x1="20" y1="28" x2="20" y2="34"/></svg>`,
  // 6. 玉筷 (Jade Chopsticks)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="14" y1="8" x2="18" y2="33"/><line x1="25" y1="8" x2="22" y2="33"/></svg>`,
  // 7. 玉斧 (Jade Axe)
  `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><line x1="14" y1="9" x2="14" y2="33"/><path d="M14 12 H25 C29 16 29 22 25 26 H14 Z"/></svg>`
];

export function initLegendScreen() {
  const container = document.querySelector('#screen-legend');
  if (!container) return;

  renderCards();
  setupNavigation();
  setupTouchSwipe();
}

export function updateLegendLanguage() {
  renderCards();
  showCard(currentCardIdx);
}

function renderCards() {
  const cardContainer = document.querySelector('#legend-cards-wrapper');
  if (!cardContainer) return;

  const treasuresHtml = TREASURE_ICONS.map((svgIcon, idx) => {
    const num = idx + 1;
    const isSelected = idx === selectedTreasureIdx;
    return `
      <button type="button" class="treasure-icon-btn ${isSelected ? 'active' : ''}" data-treasure-idx="${idx}" aria-label="${t(`treasure${num}Name`)}">
        <span class="treasure-svg-wrap">${svgIcon}</span>
        <span class="treasure-name">${t(`treasure${num}Name`)}</span>
      </button>
    `;
  }).join('');

  const activeNum = selectedTreasureIdx + 1;

  cardContainer.innerHTML = `
    <!-- Card 1 -->
    <div class="legend-card ${currentCardIdx === 0 ? 'active' : ''}" data-index="0">
      <div class="legend-card-header">
        <span class="legend-badge">01</span>
        <h3 class="legend-card-title">${t('legendCard1Title')}</h3>
      </div>
      <p class="legend-card-body">${t('legendCard1Body')}</p>
      <p class="legend-card-note">${t('legendCard1Note')}</p>
    </div>

    <!-- Card 2 -->
    <div class="legend-card ${currentCardIdx === 1 ? 'active' : ''}" data-index="1">
      <div class="legend-card-header">
        <span class="legend-badge">02</span>
        <h3 class="legend-card-title">${t('legendCard2Title')}</h3>
      </div>
      <p class="legend-tap-hint">${t('legendCard2Hint')}</p>
      <div class="treasures-icon-row" id="treasures-icon-row">
        ${treasuresHtml}
      </div>
      <div class="treasure-detail-popup" id="treasure-detail-popup">
        <strong class="treasure-popup-title" id="treasure-popup-title">${t(`treasure${activeNum}Name`)}</strong>
        <p class="treasure-popup-desc" id="treasure-popup-desc">${t(`treasure${activeNum}Desc`)}</p>
      </div>
      <p class="legend-card-note" style="margin-top: 8px;">${t('legendCard2Note')}</p>
    </div>

    <!-- Card 3 -->
    <div class="legend-card ${currentCardIdx === 2 ? 'active' : ''}" data-index="2">
      <div class="legend-card-header">
        <span class="legend-badge">03</span>
        <h3 class="legend-card-title">${t('legendCard3Title')}</h3>
      </div>
      <p class="legend-card-body">${t('legendCard3Body')}</p>
      <div style="margin-top: 20px;">
        <button id="btn-enter-map-direct" class="btn-primary-big">
          ${t('legendEnterMap')}
        </button>
      </div>
    </div>
  `;

  // Bind treasure icon clicks on Card 2
  cardContainer.querySelectorAll('.treasure-icon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-treasure-idx'), 10);
      selectedTreasureIdx = idx;
      cardContainer.querySelectorAll('.treasure-icon-btn').forEach((b, i) => {
        b.classList.toggle('active', i === idx);
      });
      const n = idx + 1;
      const titleEl = cardContainer.querySelector('#treasure-popup-title');
      const descEl = cardContainer.querySelector('#treasure-popup-desc');
      if (titleEl) titleEl.textContent = t(`treasure${n}Name`);
      if (descEl) descEl.textContent = t(`treasure${n}Desc`);
    });
  });

  // Bind enter map button on Card 3
  const enterMapBtn = document.querySelector('#btn-enter-map-direct');
  if (enterMapBtn) {
    enterMapBtn.addEventListener('click', () => {
      setScreen('hub');
    });
  }
}

function setupNavigation() {
  const prevBtn = document.querySelector('#legend-prev-btn');
  const nextBtn = document.querySelector('#legend-next-btn');
  const skipBtn = document.querySelector('#legend-skip-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentCardIdx > 0) {
        showCard(currentCardIdx - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentCardIdx < 2) {
        showCard(currentCardIdx + 1);
      } else {
        setScreen('hub');
      }
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      setScreen('hub');
    });
  }
}

function setupTouchSwipe() {
  const wrapper = document.querySelector('#legend-cards-wrapper');
  if (!wrapper) return;

  let startX = 0;
  let startY = 0;
  let swiping = false;

  wrapper.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches.length) return;
    swiping = !e.target.closest('.treasures-icon-row');
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    if (!swiping) return;
    swiping = false;
    if (!e.changedTouches || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0 && currentCardIdx < 2) {
        showCard(currentCardIdx + 1);
      } else if (dx > 0 && currentCardIdx > 0) {
        showCard(currentCardIdx - 1);
      }
    }
  }, { passive: true });
}

function showCard(index) {
  currentCardIdx = index;
  document.querySelectorAll('.legend-card').forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });

  document.querySelectorAll('.legend-dots .dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });

  const prevBtn = document.querySelector('#legend-prev-btn');
  const nextBtn = document.querySelector('#legend-next-btn');

  if (prevBtn) {
    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  }
  if (nextBtn) {
    nextBtn.style.display = index === 2 ? 'none' : 'inline-flex';
    nextBtn.textContent = t('legendNext');
  }
}
