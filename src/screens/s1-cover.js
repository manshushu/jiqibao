import { setScreen } from '../state.js';

export function initCoverScreen() {
  const startBtn = document.querySelector('#btn-start-journey');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      setScreen('legend');
    });
  }
}
