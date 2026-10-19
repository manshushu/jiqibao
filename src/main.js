import { state, subscribe, setScreen, toggleLang, toggleMuted } from './state.js';
import { updateDOMTexts } from './i18n.js';
import { updateMuteState, unlockAudio, startBgmIfAllowed } from './audio.js';

import { initLoadingScreen, updateLoadingLanguage } from './screens/s0-loading.js';
import { initCoverScreen } from './screens/s1-cover.js';
import { initLegendScreen, updateLegendLanguage } from './screens/s2-legend.js';
import { initHubScreen, updateHubView } from './screens/s3-hub.js';
import { initSpotScreen, openSpotSheet, closeSpotSheet } from './screens/s4-spot.js';
import { initPosterScreen, renderPosterScreen } from './screens/s5-poster.js';
import { initInfoScreen, setInfoPreviousScreen } from './screens/s6-info.js';

function bootstrapApp() {
  console.log('[Qibao H5] Initializing application...');

  // 1. Initialize Screen Controllers
  initLoadingScreen();
  initCoverScreen();
  initLegendScreen();
  initHubScreen();
  initSpotScreen();
  initPosterScreen();
  initInfoScreen();

  // 2. Setup Persistent Navigation Controls & Desktop Switcher
  setupNavControls();
  setupDesktopSwitcher();

  // 3. Initial DOM Text & State Hydration
  updateDOMTexts();
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  updateHubView();
  syncMuteIcon();
  handleScreenTransition(state.screen, null);

  // 4. Subscribe to State Changes
  subscribe((currentState, changeType, payload) => {
    if (changeType === 'screen') {
      handleScreenTransition(payload.to, payload.from);
    } else if (changeType === 'lang') {
      document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
      updateDOMTexts();
      updateLoadingLanguage();
      updateLegendLanguage();
      updateHubView();
      if (state.currentSpotId) {
        const sheet = document.querySelector('#spot-bottom-sheet');
        if (sheet && sheet.classList.contains('active')) {
          openSpotSheet(state.currentSpotId);
        }
      }
      if (state.screen === 'poster') {
        renderPosterScreen();
      }
    } else if (changeType === 'muted') {
      syncMuteIcon();
      updateDOMTexts();
      updateMuteState();
    } else if (changeType === 'collected' || changeType === 'reset') {
      updateHubView();
      if (state.screen === 'poster') {
        renderPosterScreen();
      }
    } else if (changeType === 'spot') {
      if (payload) {
        openSpotSheet(payload);
      } else {
        closeSpotSheet();
      }
    }
  });

  console.log('[Qibao H5] Application ready in', state.lang, 'mode.');
}

function handleScreenTransition(toScreen, fromScreen) {
  // Close spot sheet when leaving hub
  if (fromScreen === 'hub' && toScreen !== 'hub') {
    closeSpotSheet();
  }

  // Hide all screens
  document.querySelectorAll('.screen').forEach(el => {
    el.classList.remove('active');
    el.inert = true;
  });

  // Activate target screen
  const targetEl = document.querySelector(`#screen-${toScreen}`);
  if (targetEl) {
    targetEl.classList.add('active');
    targetEl.inert = false;
  }

  // Persistent top-nav visibility logic:
  // Keep language toggle and mute button accessible on S0 Loading screen per spec
  const topNav = document.querySelector('#global-top-nav');
  const progressBadge = document.querySelector('#hub-progress-badge');
  const infoBtn = document.querySelector('#btn-open-info');

  if (topNav) {
    topNav.style.display = 'flex';
    if (progressBadge) {
      progressBadge.style.visibility = (toScreen === 'hub' || toScreen === 'poster') ? 'visible' : 'hidden';
    }
    if (infoBtn) {
      infoBtn.style.display = (toScreen === 'loading' || toScreen === 'info') ? 'none' : 'inline-flex';
    }
  }

  // Screen specific lifecycle hooks
  if (toScreen === 'hub') {
    updateHubView();
  } else if (toScreen === 'poster') {
    renderPosterScreen();
  }
}

function setupNavControls() {
  const langBtn = document.querySelector('#btn-toggle-lang');
  const muteBtn = document.querySelector('#btn-toggle-mute');
  const infoBtn = document.querySelector('#btn-open-info');

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      toggleLang();
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      unlockAudio();
      toggleMuted();
      if (!state.muted) {
        startBgmIfAllowed();
      }
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener('click', () => {
      setInfoPreviousScreen(state.screen);
      setScreen('info');
    });
  }
}

function setupDesktopSwitcher() {
  const mobileBtn = document.querySelector('#btn-view-mobile');
  const desktopBtn = document.querySelector('#btn-view-desktop');
  const frame = document.querySelector('#desktop-phone-frame');

  if (mobileBtn && desktopBtn && frame) {
    mobileBtn.addEventListener('click', () => {
      frame.classList.remove('mode-desktop');
      mobileBtn.classList.add('active');
      desktopBtn.classList.remove('active');
      setTimeout(updateHubView, 200);
    });

    desktopBtn.addEventListener('click', () => {
      frame.classList.add('mode-desktop');
      desktopBtn.classList.add('active');
      mobileBtn.classList.remove('active');
      setTimeout(updateHubView, 200);
    });
  }
}

function syncMuteIcon() {
  const symbol = document.querySelector('#mute-icon-symbol');
  if (symbol) {
    symbol.textContent = state.muted ? '🔇' : '🔊';
  }
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
