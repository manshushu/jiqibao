import { state } from './state.js';

let audioCtx = null;
let masterGain = null;
let currentSpotAudio = null;
let bgmAudio = null;
let bgmIntervalId = null;
let isUnlocked = false;
const availableAudioFiles = new Set(Object.keys(import.meta.glob('../public/assets/audio/*.mp3')).map(p => p.split('/').pop()));
let spotAudioVersion = 0;

// Initialize Web Audio Context on first user touch/click
export function unlockAudio() {
  if (!audioCtx) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = state.muted ? 0 : 1;
        masterGain.connect(audioCtx.destination);
      }
    } catch (e) {
      console.warn('[Audio] AudioContext init failed:', e);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  isUnlocked = true;
}

// Start soft background ambience (BGM) if unmuted and unlocked
export function startBgmIfAllowed() {
  if (state.muted || !isUnlocked) return;
  if (bgmAudio || bgmIntervalId) return;
  if (!availableAudioFiles.has('bgm.mp3')) {
    startProceduralBgm();
    return;
  }

  try {
    const candidate = new Audio('assets/audio/bgm.mp3');
    candidate.loop = true;
    candidate.volume = 0.28;

    candidate.onerror = () => {
      bgmAudio = null;
      startProceduralBgm();
    };

    const p = candidate.play();
    if (p) {
      p.then(() => {
        bgmAudio = candidate;
      }).catch(() => {
        bgmAudio = null;
        startProceduralBgm();
      });
    }
  } catch (e) {
    startProceduralBgm();
  }
}

function startProceduralBgm() {
  if (state.muted || !audioCtx || bgmIntervalId) return;
  const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
  let step = 0;

  const playSoftNote = () => {
    if (state.muted || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;
      const freq = pentatonic[step % pentatonic.length];
      step = (step + 2) % pentatonic.length;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.8);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 2.9);
    } catch (e) {}
  };

  playSoftNote();
  bgmIntervalId = setInterval(playSoftNote, 3400);
}

export function stopBgm() {
  if (bgmAudio) {
    try {
      bgmAudio.pause();
      bgmAudio.currentTime = 0;
    } catch (e) {}
    bgmAudio = null;
  }
  if (bgmIntervalId) {
    clearInterval(bgmIntervalId);
    bgmIntervalId = null;
  }
}

// 1. Bell Tower Chime
export function playBellChime() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    // Fundamental + harmonic overtone for rich bronze bell sound
    [220, 440, 659.25].forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.98, now + 2.2);

      const peak = idx === 0 ? 0.5 : 0.15 / idx;
      gain.gain.setValueAtTime(peak, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.3 - idx * 0.4);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 2.3);
    });
  } catch (e) {
    console.warn('Bell chime error:', e);
  }
}

// 2. Stamp Thud Sound
export function playStampThud() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.32);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.36);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.36);
  } catch (e) {
    console.warn('Stamp thud error:', e);
  }
}

// 3. Steam Hiss (Mutton & Sweet Snacks)
export function playSteamHiss() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const duration = 0.7;
    const bufferSize = Math.floor(audioCtx.sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.16;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1350;

    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.008, now + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    whiteNoise.start(now);
  } catch (e) {
    console.warn('Steam hiss error:', e);
  }
}

// 4. Sugar Painting Pluck
export function playSugarPluck() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;
    const notes = [523.25, 587.33, 659.25, 783.99, 880.0];
    const freq = notes[Math.floor(Math.random() * notes.length)];

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.008, now + 0.22);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.22);
  } catch (e) {
    console.warn('Sugar pluck error:', e);
  }
}

// 5. Puhuitang Bridge Flowing Water Sound
export function playWaterStream() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const duration = 1.8;
    const bufferSize = Math.floor(audioCtx.sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99 * b0 + white * 0.05;
      b1 = 0.96 * b1 + white * 0.08;
      b2 = 0.85 * b2 + white * 0.12;
      output[i] = (b0 + b1 + b2) * 0.25;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, audioCtx.currentTime);
    filter.frequency.linearRampToValueAtTime(950, audioCtx.currentTime + 0.9);
    filter.frequency.linearRampToValueAtTime(580, audioCtx.currentTime + duration);

    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.32, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    noise.start(now);
  } catch (e) {
    console.warn('Water stream error:', e);
  }
}

// 6. Shadow Puppet Theatre Gong & Clapper
export function playPuppetGongs() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    // Small folk theatre gong + overtone
    [370, 554.37, 740].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = i === 1 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      // Characteristic gong upward pitch bend
      osc.frequency.linearRampToValueAtTime(freq * 1.04, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.99, now + 1.2);

      gain.gain.setValueAtTime(0.22 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.002, now + 1.3);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 1.35);
    });
  } catch (e) {
    console.warn('Puppet gong error:', e);
  }
}

// 7. New Qibao Modern Chime
export function playModernChord() {
  unlockAudio();
  if (state.muted || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const chord = [329.63, 415.30, 493.88, 622.25]; // E major 7th arpeggio
    chord.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + idx * 0.12;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.001, start);
      gain.gain.linearRampToValueAtTime(0.18, start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.002, start + 1.4);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(start);
      osc.stop(start + 1.45);
    });
  } catch (e) {
    console.warn('Modern chord error:', e);
  }
}

export function playSceneSynthBySpotId(spotId) {
  switch (spotId) {
    case 'bell-tower':
      playBellChime();
      break;
    case 'puhuitang-bridge':
      playWaterStream();
      break;
    case 'sliced-mutton':
    case 'sweet-snacks':
      playSteamHiss();
      break;
    case 'handicraft':
      playSugarPluck();
      setTimeout(playSugarPluck, 180);
      setTimeout(playSugarPluck, 360);
      break;
    case 'shadow-puppet':
      playPuppetGongs();
      break;
    case 'new-qibao':
      playModernChord();
      break;
    default:
      playWaterStream();
  }
}

// Play or stop spot audio file with graceful synthesis fallback
export function playSpotAudio(audioSrc, spotId, onEndCallback) {
  unlockAudio();
  if (state.muted) return false;

  stopSpotAudio();
  const version = spotAudioVersion;
  let finished = false;
  const finish = () => {
    if (version === spotAudioVersion && onEndCallback) onEndCallback(true);
  };
  const fallback = () => {
    if (finished || version !== spotAudioVersion) return;
    finished = true;
    currentSpotAudio = null;
    playSceneSynthBySpotId(spotId);
    setTimeout(finish, 2400);
  };

  if (!audioSrc || !availableAudioFiles.has(audioSrc.split('/').pop())) {
    fallback();
    return true;
  }

  try {
    currentSpotAudio = new Audio(audioSrc);
    currentSpotAudio.onended = () => {
      if (version !== spotAudioVersion) return;
      finished = true;
      currentSpotAudio = null;
      finish();
    };
    currentSpotAudio.onerror = () => {
      fallback();
    };

    const playPromise = currentSpotAudio.play();
    if (playPromise) {
      playPromise.catch(() => {
        fallback();
      });
    }
    return true;
  } catch (e) {
    fallback();
    return true;
  }
}

export function stopSpotAudio() {
  spotAudioVersion++;
  if (currentSpotAudio) {
    try {
      currentSpotAudio.pause();
      currentSpotAudio.currentTime = 0;
    } catch (e) {}
    currentSpotAudio = null;
  }
}

// Sync global mute
export function updateMuteState() {
  if (masterGain) masterGain.gain.setValueAtTime(state.muted ? 0 : 1, audioCtx.currentTime);
  if (state.muted) {
    stopSpotAudio();
    stopBgm();
  } else {
    startBgmIfAllowed();
  }
}

