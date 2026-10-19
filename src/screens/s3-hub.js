import { state, setScreen, setCurrentSpot } from '../state.js';
import { t } from '../i18n.js';
import spotsData from '../data/spots.json';
import { getQibaoSchematicSvg } from '../map-svg.js';

let guideDismissed = false;

export function initHubScreen() {
  renderSvgMap();
  setupHubControls();
  initFirstTimeGuide();
}

export function updateHubView() {
  updateProgressDisplay();
  renderSvgMap();
}

function renderSvgMap() {
  const mapContainer = document.querySelector('#map-svg-container');
  if (!mapContainer) return;

  // Re-render SVG with current collected status and language
  mapContainer.innerHTML = getQibaoSchematicSvg(spotsData, state.collected, state.lang);

  // Bind click and keyboard handlers to SVG hotspots
  mapContainer.querySelectorAll('.svg-map-hotspot').forEach(el => {
    const activateSpot = (e) => {
      e.stopPropagation();
      dismissGuideBanner();
      const spotId = el.getAttribute('data-spot-id');
      if (spotId) {
        setCurrentSpot(spotId);
      }
    };

    el.addEventListener('click', activateSpot);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateSpot(e);
      }
    });
  });
}

function updateProgressDisplay() {
  const progressBadge = document.querySelector('#hub-progress-badge');
  const generateBtn = document.querySelector('#btn-hub-generate-poster');
  const count = state.collected.length;

  if (progressBadge) {
    progressBadge.textContent = t('progressText', { n: count });
  }

  // Show generate poster button when collected >= 3
  if (generateBtn) {
    if (count >= 3) {
      generateBtn.style.display = 'inline-flex';
      generateBtn.textContent = t('generatePoster');
    } else {
      generateBtn.style.display = 'none';
    }
  }
}

function setupHubControls() {
  const generateBtn = document.querySelector('#btn-hub-generate-poster');
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      setScreen('poster');
    });
  }
}

function initFirstTimeGuide() {
  const guideEl = document.querySelector('#hub-first-guide');
  const closeBtn = document.querySelector('#btn-close-hub-guide');
  if (!guideEl) return;

  try {
    guideDismissed = sessionStorage.getItem('qibao-h5:guide-seen') === '1';
  } catch (e) {}

  if (!guideDismissed && state.collected.length === 0) {
    guideEl.style.display = 'flex';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', dismissGuideBanner);
  }
}

function dismissGuideBanner() {
  guideDismissed = true;
  const guideEl = document.querySelector('#hub-first-guide');
  if (guideEl) {
    guideEl.style.display = 'none';
  }
  try {
    sessionStorage.setItem('qibao-h5:guide-seen', '1');
  } catch (e) {}
}
