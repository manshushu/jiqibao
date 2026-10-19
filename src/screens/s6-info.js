import { setScreen, resetProgress } from '../state.js';
import { t } from '../i18n.js';
import { showToastNotice } from './s4-spot.js';

let previousScreen = 'hub';

export function setInfoPreviousScreen(screen) {
  previousScreen = screen;
}

export function initInfoScreen() {
  const closeBtn = document.querySelector('#btn-close-info');
  const resetBtn = document.querySelector('#btn-info-reset-progress');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      setScreen(previousScreen || 'hub');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm(t('infoResetConfirm'))) {
        resetProgress();
        showToastNotice(t('infoResetDone'));
      }
    });
  }
}
