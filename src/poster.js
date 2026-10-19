import { state } from './state.js';
import { t } from './i18n.js';
import i18nData from './data/i18n.json';
import spotsData from './data/spots.json';

export async function generatePosterCanvas() {
  const width = 1080;
  const height = 1920;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const isEn = state.lang === 'en';

  // 1. Traditional Rice Paper Background (#F4EDE1 base)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#FAF6EF');
  bgGrad.addColorStop(0.5, '#F4EDE1');
  bgGrad.addColorStop(1, '#ECE3D5');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle paper grain border
  ctx.strokeStyle = 'rgba(47, 62, 70, 0.15)';
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  ctx.strokeStyle = '#B5352B';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, width - 100, height - 100);

  // Corner decorative traditional brackets
  drawCornerAccents(ctx, 50, 50, width - 100, height - 100);

  // 2. Header Title & Badge
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  // Badge: 烟火闵行 · 七宝古镇 / Vibrant Minhang · Qibao Town
  const badgeText = t('posterBadge');
  ctx.font = 'bold 24px "PingFang SC", "Noto Sans SC", sans-serif';
  const badgeW = Math.max(380, Math.round(ctx.measureText(badgeText).width + 64));
  ctx.fillStyle = '#B5352B';
  roundRect(ctx, width / 2 - badgeW / 2, 96, badgeW, 52, 26, true, false);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(badgeText, width / 2, 110);

  // Main Title
  ctx.fillStyle = '#2F3E46';
  ctx.font = isEn
    ? 'bold 64px "Songti SC", "Noto Serif SC", serif'
    : 'bold 80px "Songti SC", "Noto Serif SC", serif';
  ctx.fillText(t('appTitle'), width / 2, isEn ? 178 : 172);

  // Subtitle (sized to never overflow 1080px canvas width)
  ctx.fillStyle = '#596D76';
  ctx.font = isEn
    ? '25px "PingFang SC", "Noto Sans SC", sans-serif'
    : '32px "PingFang SC", "Noto Sans SC", sans-serif';
  ctx.fillText(t('appSubtitle'), width / 2, 272);

  // Divider Line with central diamond
  ctx.strokeStyle = 'rgba(47, 62, 70, 0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(140, 336);
  ctx.lineTo(width - 140, 336);
  ctx.stroke();

  ctx.fillStyle = '#B5352B';
  ctx.beginPath();
  ctx.arc(width / 2, 336, 6, 0, Math.PI * 2);
  ctx.fill();

  // 3. Middle: 7 Stamp Badges Grid (Each with Bilingual Spot Name per Spec S5)
  const collectedCount = state.collected.length;
  const isFull = collectedCount === spotsData.length;

  const startY = 380;
  const colWidth = 440;
  const colGap = 36;
  const rowHeight = 190;
  const leftX1 = (width - (colWidth * 2 + colGap)) / 2;
  const leftX2 = leftX1 + colWidth + colGap;

  spotsData.forEach((spot, idx) => {
    const isCollected = state.collected.includes(spot.id);
    let x, y;

    if (idx < 6) {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      x = col === 0 ? leftX1 : leftX2;
      y = startY + row * (rowHeight + 22);
    } else {
      // 7th spot centered
      x = width / 2 - colWidth / 2;
      y = startY + 3 * (rowHeight + 22);
    }

    drawSpotSealCard(ctx, spot, isCollected, x, y, colWidth, rowHeight);
  });

  // 4. Bottom Section: Progress + Bilingual Conclusion Quote + Date
  const bottomY = 1445;

  // Collection summary badge (e.g. 已集 4/7 宝 — never says "集齐" when < 7)
  const summaryText = t('progressText', { n: collectedCount });
  ctx.fillStyle = isFull ? '#B5352B' : '#5E8B7E';
  roundRect(ctx, width / 2 - 170, bottomY, 340, 58, 29, true, false);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px "PingFang SC", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(summaryText, width / 2, bottomY + 15);

  // Chinese Quote (Always shown as part of bilingual conclusion per Spec S5)
  const quoteZh = isFull
    ? i18nData.zh.posterQuote
    : i18nData.zh.posterIncompleteQuote;
  ctx.fillStyle = '#2F3E46';
  ctx.font = 'bold 34px "Songti SC", "Noto Serif SC", serif';
  ctx.fillText(quoteZh, width / 2, bottomY + 86);

  // English Quote
  const quoteEn = isFull
    ? i18nData.en.posterQuoteEn
    : i18nData.en.posterIncompleteQuoteEn;
  ctx.fillStyle = '#596D76';
  ctx.font = 'italic 22px "PingFang SC", sans-serif';
  ctx.fillText(quoteEn, width / 2, bottomY + 138);

  // Date & Location Watermark + School & Author Credit
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  ctx.fillStyle = '#8598A0';
  ctx.font = '22px "PingFang SC", sans-serif';
  ctx.fillText(`${dateStr} · ${t('posterLocation')}`, width / 2, bottomY + 195);

  ctx.fillStyle = '#596D76';
  ctx.font = '20px "PingFang SC", sans-serif';
  ctx.fillText(t('posterAuthor'), width / 2, bottomY + 232);

  // Official Seal in bottom-right corner
  drawGrandSeal(ctx, width - 205, height - 225, t('posterSeal'), isEn);

  return canvas.toDataURL('image/png');
}

function drawSpotSealCard(ctx, spot, isCollected, x, y, w, h) {
  ctx.save();

  if (isCollected) {
    // Lighted Vermilion / Paper card
    ctx.fillStyle = '#FFFDF9';
    roundRect(ctx, x, y, w, h, 14, true, false);
    ctx.strokeStyle = '#B5352B';
    ctx.lineWidth = 3;
    roundRect(ctx, x, y, w, h, 14, false, true);

    // Vermilion Seal
    ctx.fillStyle = '#B5352B';
    roundRect(ctx, x + 16, y + 32, 88, 88, 12, true, false);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, x + 21, y + 37, 78, 78, 9, false, true);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 42px "Songti SC", serif';
    ctx.textAlign = 'center';
    ctx.fillText('宝', x + 60, y + 52);

    // Bilingual Spot Name (Chinese + English)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#2F3E46';
    ctx.font = 'bold 28px "Songti SC", serif';
    ctx.fillText(`0${spot.order} ${spot.name.zh}`, x + 120, y + 22);

    ctx.fillStyle = '#596D76';
    ctx.font = '600 18px "PingFang SC", sans-serif';
    ctx.fillText(spot.name.en, x + 120, y + 58);

    // Tags (first 2 tags to prevent horizontal overflow)
    const tagsList = (spot.tags[state.lang] || spot.tags.zh).slice(0, 2);
    const tagsStr = tagsList.join(' · ');
    ctx.fillStyle = '#5E8B7E';
    ctx.font = '18px "PingFang SC", sans-serif';
    ctx.fillText(tagsStr, x + 120, y + 92);

    // Collected mark
    ctx.fillStyle = '#B5352B';
    ctx.font = 'bold 19px "PingFang SC", sans-serif';
    ctx.fillText(t('posterCollectedMark'), x + 120, y + 128);
  } else {
    // Gray dashed card
    ctx.fillStyle = 'rgba(236, 228, 214, 0.45)';
    roundRect(ctx, x, y, w, h, 14, true, false);
    ctx.strokeStyle = 'rgba(47, 62, 70, 0.22)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    roundRect(ctx, x, y, w, h, 14, false, true);
    ctx.setLineDash([]);

    // Grayed Seal
    ctx.strokeStyle = 'rgba(47, 62, 70, 0.25)';
    ctx.lineWidth = 2;
    roundRect(ctx, x + 16, y + 32, 88, 88, 12, false, true);
    ctx.fillStyle = 'rgba(47, 62, 70, 0.32)';
    ctx.font = 'bold 38px "Songti SC", serif';
    ctx.textAlign = 'center';
    ctx.fillText('?', x + 60, y + 54);

    // Bilingual Spot Name (Chinese + English)
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(47, 62, 70, 0.52)';
    ctx.font = 'bold 27px "Songti SC", serif';
    ctx.fillText(`0${spot.order} ${spot.name.zh}`, x + 120, y + 28);

    ctx.fillStyle = 'rgba(47, 62, 70, 0.42)';
    ctx.font = '500 18px "PingFang SC", sans-serif';
    ctx.fillText(spot.name.en, x + 120, y + 66);

    ctx.font = '18px "PingFang SC", sans-serif';
    ctx.fillText(t('posterUncollectedMark'), x + 120, y + 112);
  }

  ctx.restore();
}

function drawGrandSeal(ctx, x, y, text, isEn = false) {
  ctx.save();
  ctx.fillStyle = '#B5352B';
  roundRect(ctx, x, y, 116, 116, 12, true, false);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 3;
  roundRect(ctx, x + 6, y + 6, 104, 104, 8, false, true);

  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  if (isEn) {
    ctx.font = 'bold 20px "Songti SC", serif';
    ctx.fillText('QIBAO', x + 58, y + 32);
    ctx.font = 'bold 17px "PingFang SC", sans-serif';
    ctx.fillText(text, x + 58, y + 64);
  } else {
    ctx.font = 'bold 28px "Songti SC", serif';
    ctx.fillText(text.slice(0, 2), x + 58, y + 24);
    ctx.fillText(text.slice(2, 4), x + 58, y + 62);
  }
  ctx.restore();
}

function drawCornerAccents(ctx, x, y, w, h) {
  const len = 30;
  ctx.strokeStyle = '#B5352B';
  ctx.lineWidth = 4;

  // Top Left
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 10 + len);
  ctx.lineTo(x + 10, y + 10);
  ctx.lineTo(x + 10 + len, y + 10);
  ctx.stroke();

  // Top Right
  ctx.beginPath();
  ctx.moveTo(x + w - 10 - len, y + 10);
  ctx.lineTo(x + w - 10, y + 10);
  ctx.lineTo(x + w - 10, y + 10 + len);
  ctx.stroke();

  // Bottom Left
  ctx.beginPath();
  ctx.moveTo(x + 10, y + h - 10 - len);
  ctx.lineTo(x + 10, y + h - 10);
  ctx.lineTo(x + 10 + len, y + h - 10);
  ctx.stroke();

  // Bottom Right
  ctx.beginPath();
  ctx.moveTo(x + w - 10 - len, y + h - 10);
  ctx.lineTo(x + w - 10, y + h - 10);
  ctx.lineTo(x + w - 10, y + h - 10 - len);
  ctx.stroke();
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}
