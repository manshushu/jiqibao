import { setScreen, resetProgress } from '../state.js';
import { generatePosterCanvas } from '../poster.js';
import { t } from '../i18n.js';
let renderVersion = 0;

export async function renderPosterScreen() {
  const container = document.querySelector('#poster-image-target');
  if (!container) return;
  const version = ++renderVersion;
  const download = document.querySelector('#btn-poster-download');
  download?.removeAttribute('href');

  container.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--ink-light); font-size: 14px;">${t('loading')}</div>`;

  try {
    const dataUrl = await generatePosterCanvas();
    if (version !== renderVersion) return;
    container.innerHTML = `<img src="${dataUrl}" alt="七宝集章卡海报" style="width: 100%; height: 100%; object-fit: contain;"/>`;
    if (download) download.href = dataUrl;
  } catch (e) {
    console.error('Failed to generate poster canvas:', e);
    if (version !== renderVersion) return;
    container.innerHTML = `<div style="padding: 20px; color: var(--vermilion);">${t('posterError')}</div>`;
  }
}

export function initPosterScreen() {
  const backBtn = document.querySelector('#btn-poster-back');
  const resetBtn = document.querySelector('#btn-poster-reset');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      setScreen('hub');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm(t('infoResetConfirm'))) {
        resetProgress();
        setScreen('hub');
      }
    });
  }
}
