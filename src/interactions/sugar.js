import { playSugarPluck } from '../audio.js';
import { t } from '../i18n.js';

// Preset tracing paths on 320x160 canvas
const TEMPLATES = {
  free: [],
  dragon: [
    // Dragon head, horns, and sinuous body
    [
      [75, 48], [95, 32], [122, 36], [132, 54], [112, 68], [88, 66],
      [105, 88], [138, 102], [172, 82], [198, 56], [228, 62], [248, 92],
      [226, 122], [192, 128], [160, 118]
    ],
    // Horns & whiskers
    [
      [96, 32], [86, 16], [108, 22]
    ],
    [
      [132, 54], [158, 48], [174, 58]
    ]
  ],
  fish: [
    // Koi fish body and tail fins
    [
      [68, 82], [105, 46], [162, 44], [208, 68], [254, 42], [242, 82],
      [256, 122], [208, 94], [162, 118], [105, 116], [68, 82]
    ],
    // Dorsal & pectoral fin accents
    [
      [128, 45], [148, 24], [178, 44]
    ],
    [
      [124, 92], [146, 112], [162, 96]
    ]
  ]
};

export function renderSugarInteraction(containerEl) {
  let currentMode = 'dragon';

  containerEl.innerHTML = `
    <div class="micro-sugar-box">
      <div class="sugar-template-bar" role="group" aria-label="糖画模板选择">
        <button type="button" class="sugar-tpl-btn ${currentMode === 'dragon' ? 'active' : ''}" data-tpl="dragon">${t('sugarModeDragon')}</button>
        <button type="button" class="sugar-tpl-btn ${currentMode === 'fish' ? 'active' : ''}" data-tpl="fish">${t('sugarModeFish')}</button>
        <button type="button" class="sugar-tpl-btn ${currentMode === 'free' ? 'active' : ''}" data-tpl="free">${t('sugarModeFree')}</button>
      </div>
      <div class="sugar-canvas-wrap">
        <canvas class="sugar-canvas" width="320" height="160"></canvas>
      </div>
      <div class="sugar-footer-bar">
        <span class="sugar-hint-text">
          ${t('microSugarHint')}
        </span>
        <button type="button" class="sugar-reset-btn">
          ${t('microSugarReset')}
        </button>
      </div>
    </div>
  `;

  const canvas = containerEl.querySelector('.sugar-canvas');
  const ctx = canvas.getContext('2d');
  const hintText = containerEl.querySelector('.sugar-hint-text');
  const resetBtn = containerEl.querySelector('.sugar-reset-btn');
  const tplBtns = containerEl.querySelectorAll('.sugar-tpl-btn');

  let isDrawing = false;
  let totalDrawn = 0;
  let lastX = 0;
  let lastY = 0;

  function initSlate() {
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#2D3A40';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle stone texture
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 35 + 10);
      ctx.lineTo(canvas.width, i * 35 + 25);
      ctx.stroke();
    }

    // Draw preset tracing guide if selected
    const strokes = TEMPLATES[currentMode] || [];
    if (strokes.length > 0) {
      ctx.save();
      ctx.strokeStyle = 'rgba(244, 196, 108, 0.38)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash([6, 6]);

      strokes.forEach(poly => {
        if (!poly.length) return;
        ctx.beginPath();
        ctx.moveTo(poly[0][0], poly[0][1]);
        for (let i = 1; i < poly.length; i++) {
          ctx.lineTo(poly[i][0], poly[i][1]);
        }
        ctx.stroke();
      });

      // Start dot indicator
      const startPt = strokes[0][0];
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(224, 160, 48, 0.75)';
      ctx.beginPath();
      ctx.arc(startPt[0], startPt[1], 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  initSlate();

  function startDraw(x, y) {
    isDrawing = true;
    lastX = x;
    lastY = y;
    playSugarPluck();
  }

  function drawMove(x, y) {
    if (!isDrawing) return;

    ctx.save();
    ctx.setLineDash([]);
    // Outer golden amber sugar stroke
    ctx.strokeStyle = '#E2971B';
    ctx.shadowColor = '#FAD06C';
    ctx.shadowBlur = 6;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Inner specular highlight line
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#FFF3C4';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.restore();

    const dist = Math.hypot(x - lastX, y - lastY);
    totalDrawn += dist;

    lastX = x;
    lastY = y;

    if (totalDrawn > 280) {
      hintText.textContent = t('microSugarDone');
      hintText.style.color = 'var(--vermilion)';
      hintText.style.fontWeight = 'bold';
    }
  }

  function stopDraw() {
    isDrawing = false;
  }

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  const onWindowMouseMove = (e) => {
    if (!isDrawing) return;
    const c = getCoords(e);
    drawMove(c.x, c.y);
  };
  const onWindowMouseUp = () => {
    stopDraw();
  };

  canvas.addEventListener('mousedown', (e) => {
    const c = getCoords(e);
    startDraw(c.x, c.y);
  });
  window.addEventListener('mousemove', onWindowMouseMove);
  window.addEventListener('mouseup', onWindowMouseUp);

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const c = getCoords(e);
    startDraw(c.x, c.y);
  }, { passive: false });
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const c = getCoords(e);
    drawMove(c.x, c.y);
  }, { passive: false });
  canvas.addEventListener('touchend', stopDraw);

  function resetCanvas() {
    totalDrawn = 0;
    initSlate();
    hintText.textContent = t('microSugarHint');
    hintText.style.color = 'var(--ink-light)';
    hintText.style.fontWeight = 'normal';
  }

  resetBtn.addEventListener('click', resetCanvas);

  tplBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentMode = btn.getAttribute('data-tpl') || 'free';
      tplBtns.forEach(b => b.classList.toggle('active', b === btn));
      resetCanvas();
    });
  });

  return () => {
    window.removeEventListener('mousemove', onWindowMouseMove);
    window.removeEventListener('mouseup', onWindowMouseUp);
  };
}
