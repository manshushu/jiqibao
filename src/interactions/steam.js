import { playSteamHiss } from '../audio.js';
import { t } from '../i18n.js';

export function renderSteamInteraction(containerEl, isMutton = true) {
  const dishSvg = isMutton ? `
    <svg viewBox="0 0 120 70" width="90" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="60" cy="62" rx="45" ry="7" fill="#2F3E46" fill-opacity="0.15"/>
      <!-- Porcelain Bowl Body -->
      <path d="M15 25 C15 55 105 55 105 25 Z" fill="#FAF6F0" stroke="#3E545E" stroke-width="2.5"/>
      <!-- Bowl Rim -->
      <ellipse cx="60" cy="25" rx="45" ry="10" fill="#FAF6F0" stroke="#3E545E" stroke-width="2.5"/>
      <!-- Steaming Sliced Mutton inside -->
      <ellipse cx="60" cy="24" rx="38" ry="7" fill="#8F6253"/>
      <ellipse cx="52" cy="22" rx="16" ry="4" fill="#E6C8C0"/>
      <ellipse cx="68" cy="23" rx="14" ry="4" fill="#D6B0A6"/>
      <!-- Scallion sprinkles -->
      <circle cx="58" cy="22" r="2.5" fill="#5F9349"/>
      <circle cx="48" cy="24" r="2" fill="#5F9349"/>
      <circle cx="72" cy="21" r="2.5" fill="#5F9349"/>
    </svg>
  ` : `
    <svg viewBox="0 0 120 70" width="90" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="60" cy="62" rx="45" ry="7" fill="#2F3E46" fill-opacity="0.15"/>
      <!-- Bamboo Steamer Body -->
      <rect x="20" y="24" width="80" height="32" rx="4" fill="#CDB69B" stroke="#7D6246" stroke-width="2.5"/>
      <ellipse cx="60" cy="24" rx="40" ry="8" fill="#E3D1BC" stroke="#7D6246" stroke-width="2.5"/>
      <!-- Tangyuan / Begonia cake inside -->
      <circle cx="45" cy="22" r="9" fill="#FFFFFF" stroke="#D3C7B6" stroke-width="1.5"/>
      <circle cx="62" cy="20" r="9" fill="#FFFFFF" stroke="#D3C7B6" stroke-width="1.5"/>
      <circle cx="78" cy="22" r="9" fill="#E08B3E" stroke="#8E460E" stroke-width="1.5"/>
    </svg>
  `;

  containerEl.innerHTML = `
    <div class="micro-steam-box" id="steam-interactive-dish" title="${t('microSteamHint')}">
      <canvas class="steam-canvas" width="300" height="140"></canvas>
      <div class="steam-dish-wrap">
        ${dishSvg}
      </div>
      <p style="font-size: 12px; color: var(--ink-light); margin-top: 4px; z-index: 3;">
        ${t('microSteamHint')}
      </p>
    </div>
  `;

  const box = containerEl.querySelector('#steam-interactive-dish');
  const canvas = containerEl.querySelector('.steam-canvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animId = null;
  const timers = new Set();
  let disposed = false;

  class Particle {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 36;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 1.2;
      this.vy = -(1.2 + Math.random() * 1.8);
      this.radius = 7 + Math.random() * 8;
      this.alpha = 0.55;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.radius += 0.35;
      this.alpha -= 0.012;
    }
    draw(context) {
      context.save();
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${Math.max(0, this.alpha)})`;
      context.fill();
      context.restore();
    }
  }

  function emitSteam(withSound = true) {
    if (disposed) return;
    if (withSound) playSteamHiss();
    const centerX = canvas.width / 2;
    const bottomY = canvas.height - 35;
    for (let i = 0; i < 18; i++) {
      const timer = setTimeout(() => {
        timers.delete(timer);
        if (disposed) return;
        particles.push(new Particle(centerX, bottomY));
        if (!animId) loop();
      }, i * 30);
      timers.add(timer);
    }

  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw(ctx);
      if (particles[i].alpha <= 0) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      animId = requestAnimationFrame(loop);
    } else {
      animId = null;
    }
  }

  box.addEventListener('click', emitSteam);

  // Auto puff once on render
  const initialTimer = setTimeout(() => {
    timers.delete(initialTimer);
    emitSteam(false);
  }, 200);
  timers.add(initialTimer);
  return () => {
    disposed = true;
    timers.forEach(clearTimeout);
    if (animId) cancelAnimationFrame(animId);
  };
}
