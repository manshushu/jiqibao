import { setScreen, state } from '../state.js';
import { unlockAudio, startBgmIfAllowed } from '../audio.js';
import { t } from '../i18n.js';

let isLoaded = false;

export function initLoadingScreen() {
  const enterBtn = document.querySelector('#btn-enter-app');
  const progressBar = document.querySelector('#loading-progress-bar');
  const progressNum = document.querySelector('#loading-progress-num');
  const loadingText = document.querySelector('#loading-text-desc');

  let progress = 0;

  // Preload cover image while animating progress bar
  const preloadImg = new Image();
  preloadImg.src = 'assets/img/cover.webp';

  const timer = setInterval(() => {
    progress = Math.min(100, progress + 20);
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
    if (progressNum) {
      progressNum.textContent = `${progress}%`;
    }

    if (progress >= 100) {
      clearInterval(timer);
      isLoaded = true;
      if (loadingText) {
        loadingText.setAttribute('data-i18n', 'loadingReady');
        loadingText.textContent = t('loadingReady');
      }
      if (enterBtn) {
        enterBtn.style.display = 'inline-flex';
      }
    }
  }, 140);

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      unlockAudio();
      if (!state.muted) {
        startBgmIfAllowed();
      }
      setScreen('cover');
    });
  }
}

export function updateLoadingLanguage() {
  const loadingText = document.querySelector('#loading-text-desc');
  if (loadingText) {
    const key = isLoaded ? 'loadingReady' : 'loading';
    loadingText.setAttribute('data-i18n', key);
    loadingText.textContent = t(key);
  }
}
