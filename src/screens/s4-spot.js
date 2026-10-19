import { state, collectSpot, setCurrentSpot, setMuted } from '../state.js';
import { t } from '../i18n.js';
import { playStampThud, playSpotAudio, stopSpotAudio } from '../audio.js';
import { createSpotPlaceholder } from '../placeholders.js';
import spotsData from '../data/spots.json';

import { renderBellInteraction } from '../interactions/bell.js';
import { renderBridgeInteraction } from '../interactions/bridge.js';
import { renderSugarInteraction } from '../interactions/sugar.js';
import { renderSteamInteraction } from '../interactions/steam.js';
import { renderPuppetInteraction } from '../interactions/puppet.js';
import { renderModernInteraction } from '../interactions/modern.js';

let isAudioPlaying = false;
let currentInteractionCleanup = null;

function cleanupCurrentInteraction() {
  if (typeof currentInteractionCleanup === 'function') {
    try {
      currentInteractionCleanup();
    } catch (e) {}
    currentInteractionCleanup = null;
  }
}

export function initSpotScreen() {
  const backdrop = document.querySelector('#bottom-sheet-backdrop');
  const sheet = document.querySelector('#spot-bottom-sheet');

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      setCurrentSpot(null);
    });
  }

  // Support swipe-down to close on the bottom sheet
  if (sheet) {
    setupSheetSwipeDown(sheet);
  }
}

function setupSheetSwipeDown(sheet) {
  let startY = 0;
  let currentDeltaY = 0;
  let canSwipeClose = false;

  sheet.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches.length) return;
    // Do not intercept touch inside canvas/puppet interactive areas
    if (e.target.closest('.micro-interaction-wrapper')) {
      canSwipeClose = false;
      return;
    }
    const scrollContent = sheet.querySelector('#spot-sheet-dynamic-content');
    const isAtTop = !scrollContent || scrollContent.scrollTop <= 2;
    const isHandle = !!e.target.closest('#sheet-drag-handle');

    if (isAtTop || isHandle) {
      canSwipeClose = true;
      startY = e.touches[0].clientY;
      currentDeltaY = 0;
    } else {
      canSwipeClose = false;
    }
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!canSwipeClose || !e.touches || !e.touches.length) return;
    const dy = e.touches[0].clientY - startY;
    if (dy > 0) {
      currentDeltaY = dy;
      sheet.style.transform = `translateY(${Math.min(dy * 0.65, 220)}px)`;
    }
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    if (!canSwipeClose) return;
    sheet.style.transform = '';
    if (currentDeltaY > 75) {
      setCurrentSpot(null);
    }
    canSwipeClose = false;
    currentDeltaY = 0;
  }, { passive: true });
}

export function openSpotSheet(spotId) {
  const spot = spotsData.find(s => s.id === spotId);
  if (!spot) return;

  const backdrop = document.querySelector('#bottom-sheet-backdrop');
  const sheet = document.querySelector('#spot-bottom-sheet');
  if (!backdrop || !sheet) return;

  renderSpotContent(spot);

  backdrop.classList.add('active');
  sheet.classList.add('active');
}

export function closeSpotSheet() {
  cleanupCurrentInteraction();
  stopSpotAudio();
  isAudioPlaying = false;

  const backdrop = document.querySelector('#bottom-sheet-backdrop');
  const sheet = document.querySelector('#spot-bottom-sheet');
  if (backdrop) backdrop.classList.remove('active');
  if (sheet) {
    sheet.style.transform = '';
    sheet.classList.remove('active');
  }
}

export function renderSpotContent(spot) {
  cleanupCurrentInteraction();
  stopSpotAudio();
  isAudioPlaying = false;
  const container = document.querySelector('#spot-sheet-dynamic-content');
  if (!container) return;
  container.scrollTop = 0;

  const isCollected = state.collected.includes(spot.id);
  const spotName = spot.name[state.lang] || spot.name.zh;
  const spotAltName = state.lang === 'zh' ? spot.name.en : spot.name.zh;
  const summary = spot.summary[state.lang] || spot.summary.zh;
  const tags = spot.tags[state.lang] || spot.tags.zh;

  // Real local image with JPEG fallback and SVG placeholder fallback
  const svgFallback = createSpotPlaceholder(spot.name.zh, spot.name.en, spot.order);
  const imgSrc = spot.media.image || svgFallback;
  const jpgFallback = spot.media.fallbackImage || svgFallback;

  // Next / Prev Spot IDs
  const currentIndex = spotsData.findIndex(s => s.id === spot.id);
  const prevSpot = spotsData[(currentIndex - 1 + spotsData.length) % spotsData.length];
  const nextSpot = spotsData[(currentIndex + 1) % spotsData.length];

  const orderTitle = t('spotOrderBadge', { n: spot.order });

  // Quote block: only render if spot.quote is non-null (never fabricate quotes)
  const quoteText = spot.quote && (spot.quote[state.lang] || spot.quote.zh);
  const quoteAuthor = spot.quote && (spot.quote.author?.[state.lang] || spot.quote.author?.zh || '');
  const quoteHtml = quoteText
    ? `
      <blockquote class="sheet-quote-box">
        <span class="sheet-quote-label">${t('quoteLabel')}</span>
        <p class="sheet-quote-text">“${quoteText}”</p>
        ${quoteAuthor ? `<cite class="sheet-quote-author">—— ${quoteAuthor}</cite>` : ''}
      </blockquote>
    `
    : '';

  // Unverified badge in corner when verified === false
  const unverifiedHtml = spot.verified === false
    ? `<span class="sheet-unverified-tag">${t('unverifiedTag')}</span>`
    : '';

  container.innerHTML = `
    <!-- Top Bar with >= 44x44 Close Button -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <span style="font-size: 14px; font-weight: 700; color: var(--vermilion); letter-spacing: 1.5px;">
        ${orderTitle}
      </span>
      <button class="icon-btn" id="btn-header-close-spot" aria-label="${t('close')}" title="${t('close')}">
        ✕
      </button>
    </div>

    <!-- Spot Photo Media Box -->
    <div class="sheet-media-box">
      <picture>
        <source srcset="${imgSrc}" type="image/webp" />
        <img src="${jpgFallback}" alt="${spotName}" id="spot-main-img" />
      </picture>
      ${unverifiedHtml}
    </div>

    <!-- Title and Bilingual Subtitle -->
    <div class="sheet-title-row">
      <h2 class="sheet-title">${spotName}</h2>
      <span class="sheet-title-en">${spotAltName}</span>
    </div>

    <!-- Tag Pills -->
    <div class="sheet-tags-row">
      ${tags.map(tag => `<span class="sheet-tag">${tag}</span>`).join('')}
    </div>

    <!-- Summary Paragraph -->
    <p class="sheet-summary">${summary}</p>

    <!-- Optional Local Person Quote (Hidden when null) -->
    ${quoteHtml}

    <!-- Ambient Audio Player Button -->
    <button id="btn-spot-ambient-sound" class="btn-listen-sound">
      <span id="spot-sound-icon">🔊</span>
      <span id="spot-sound-btn-text">${t('soundPlay')}</span>
    </button>

    <!-- Micro-Interaction Box (P1) -->
    ${spot.special ? `<div class="micro-interaction-wrapper" id="micro-interaction-slot"></div>` : ''}

    <!-- Sticky Bottom Action Bar -->
    <div class="sheet-bottom-actions">
      <button class="pill-btn" id="btn-spot-prev" style="min-width: 68px; min-height: 44px;">${t('prevSpot')}</button>
      <button class="btn-collect-spot ${isCollected ? 'collected' : ''}" id="btn-do-collect">
        ${isCollected ? t('collected') : t('collect')}
      </button>
      <button class="pill-btn" id="btn-spot-next" style="min-width: 68px; min-height: 44px;">${t('nextSpot')}</button>
    </div>
  `;

  // Bind image fallback to SVG placeholder if both webp and jpg fail
  const mainImg = container.querySelector('#spot-main-img');
  if (mainImg) {
    mainImg.addEventListener('error', () => {
      if (mainImg.src !== svgFallback) {
        mainImg.src = svgFallback;
      }
    });
  }

  // Bind Header Close Button
  const headerCloseBtn = container.querySelector('#btn-header-close-spot');
  if (headerCloseBtn) {
    headerCloseBtn.addEventListener('click', () => {
      setCurrentSpot(null);
    });
  }

  // Render micro-interaction if spot has a special feature
  if (spot.special) {
    const slot = container.querySelector('#micro-interaction-slot');
    if (slot) {
      if (spot.special === 'bell') {
        currentInteractionCleanup = renderBellInteraction(slot) || null;
      } else if (spot.special === 'bridge') {
        currentInteractionCleanup = renderBridgeInteraction(slot) || null;
      } else if (spot.special === 'sugar') {
        currentInteractionCleanup = renderSugarInteraction(slot) || null;
      } else if (spot.special === 'steam') {
        currentInteractionCleanup = renderSteamInteraction(slot, spot.id === 'sliced-mutton') || null;
      } else if (spot.special === 'puppet') {
        currentInteractionCleanup = renderPuppetInteraction(slot) || null;
      } else if (spot.special === 'modern') {
        currentInteractionCleanup = renderModernInteraction(slot) || null;
      }
    }
  }

  // Bind Audio Play Button
  const audioBtn = container.querySelector('#btn-spot-ambient-sound');
  const audioBtnText = container.querySelector('#spot-sound-btn-text');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (isAudioPlaying) {
        stopSpotAudio();
        isAudioPlaying = false;
        audioBtnText.textContent = t('soundPlay');
      } else {
        // Explicit click on "Play Ambient Sound" unmutes audio so user hears it immediately
        if (state.muted) {
          setMuted(false);
        }
        isAudioPlaying = true;
        audioBtnText.textContent = t('soundPlaying');

        playSpotAudio(spot.media.audio, spot.id, () => {
          isAudioPlaying = false;
          if (audioBtnText) {
            audioBtnText.textContent = t('soundPlay');
          }
        });
      }
    });
  }

  // Bind Collect Button
  const collectBtn = container.querySelector('#btn-do-collect');
  if (collectBtn) {
    collectBtn.addEventListener('click', () => {
      if (!state.collected.includes(spot.id)) {
        triggerStampingAnimation(spotName);
        collectSpot(spot.id);
        collectBtn.classList.add('collected');
        collectBtn.textContent = t('collected');

        if (state.collected.length === spotsData.length) {
          showToastNotice(t('allCollectedNotice'));
        }
      }
    });
  }

  // Bind Prev / Next Spot Buttons
  const prevBtn = container.querySelector('#btn-spot-prev');
  const nextBtn = container.querySelector('#btn-spot-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopSpotAudio();
      setCurrentSpot(prevSpot.id);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopSpotAudio();
      setCurrentSpot(nextSpot.id);
    });
  }
}

function triggerStampingAnimation(spotName) {
  playStampThud();

  const overlay = document.querySelector('#stamp-animation-overlay');
  const badgeTitle = document.querySelector('#stamp-badge-spot-title');
  if (overlay) {
    if (badgeTitle) badgeTitle.textContent = spotName;
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 900);
  }
}

export function showToastNotice(text) {
  const toast = document.querySelector('#toast-notice');
  if (toast) {
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}
