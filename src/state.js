/**
 * State Management with safe localStorage persistence and event subscriptions.
 */

import spotsData from './data/spots.json';
const STORAGE_PREFIX = 'qibao-h5:';

// Safe localStorage wrapper
const storage = {
  get(key, defaultVal) {
    try {
      const item = localStorage.getItem(STORAGE_PREFIX + key);
      return item ? JSON.parse(item) : defaultVal;
    } catch (e) {
      console.warn('localStorage read failed, using memory fallback:', e);
      return defaultVal;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch (e) {
      console.warn('localStorage write failed:', e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (e) {
      console.warn('localStorage remove failed:', e);
    }
  }
};

// Check URL param ?lang=zh|en
function getInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam === 'zh' || langParam === 'en') {
    return langParam;
  }
  return storage.get('lang', 'zh') === 'en' ? 'en' : 'zh';
}

const savedCollected = storage.get('collected', []);
const validSpotIds = new Set(spotsData.map(s => s.id));
export const state = {
  lang: getInitialLang(),
  muted: storage.get('muted', true) !== false,
  screen: 'loading', // 'loading' | 'cover' | 'legend' | 'hub' | 'spot' | 'poster' | 'info'
  currentSpotId: null,
  collected: Array.isArray(savedCollected) ? [...new Set(savedCollected.filter(id => validSpotIds.has(id)))] : []
};

const listeners = new Set();

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify(changeType, payload) {
  listeners.forEach(fn => {
    try {
      fn(state, changeType, payload);
    } catch (e) {
      console.error('Error in state subscriber:', e);
    }
  });
}

export function setScreen(screenName) {
  if (state.screen === screenName) return;
  const prev = state.screen;
  state.screen = screenName;
  notify('screen', { from: prev, to: screenName });
}

export function setLang(newLang) {
  if (newLang !== 'zh' && newLang !== 'en') return;
  state.lang = newLang;
  storage.set('lang', newLang);
  notify('lang', newLang);
}

export function toggleLang() {
  const target = state.lang === 'zh' ? 'en' : 'zh';
  setLang(target);
}

export function setMuted(isMuted) {
  state.muted = !!isMuted;
  storage.set('muted', state.muted);
  notify('muted', state.muted);
}

export function toggleMuted() {
  setMuted(!state.muted);
}

export function setCurrentSpot(spotId) {
  state.currentSpotId = spotId;
  notify('spot', spotId);
}

export function collectSpot(spotId) {
  if (!state.collected.includes(spotId)) {
    state.collected.push(spotId);
    storage.set('collected', state.collected);
    notify('collected', { spotId, total: state.collected.length });
    return true;
  }
  return false;
}

export function resetProgress() {
  state.collected = [];
  storage.remove('collected');
  notify('reset', null);
}
