import i18nData from './data/i18n.json';
import { state } from './state.js';

export function t(key, params = {}) {
  const currentLang = state.lang || 'zh';
  const langDict = i18nData[currentLang] || i18nData['zh'];
  let text = langDict[key];

  if (text === undefined) {
    // Fallback to Chinese if missing in English
    text = i18nData['zh'][key];
    if (text === undefined) {
      console.warn(`[i18n] Missing translation key: "${key}"`);
      return key;
    }
  }

  // Replace {param} placeholders
  if (params && typeof params === 'object') {
    Object.keys(params).forEach(p => {
      text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
    });
  }

  return text;
}

export function updateDOMTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });

  // Update dynamic language toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.textContent = state.lang === 'zh' ? 'EN' : '中文';
  });

  // Update mute buttons
  document.querySelectorAll('.mute-toggle-btn').forEach(btn => {
    btn.setAttribute('aria-label', state.muted ? t('muteOn') : t('muteOff'));
  });
}
