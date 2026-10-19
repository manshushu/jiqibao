import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  plugins: [
    {
      name: 'qibao-audit-plugin',
      buildStart() {
        try {
          const spotsPath = path.resolve(__dirname, 'src/data/spots.json');
          const publicDir = path.resolve(__dirname, 'public');
          if (!fs.existsSync(spotsPath)) return;

          const spotsData = JSON.parse(fs.readFileSync(spotsPath, 'utf-8'));
          const unverifiedSpots = [];
          const missingImages = [];
          const oversizedImages = [];
          const synthesizedAudios = [];

          console.log('\n============================================================');
          console.log('[Qibao Build Audit] Checking Fact Verification & Media Assets');
          console.log('============================================================');

          // Check cover image
          ['assets/img/cover.webp', 'assets/img/cover.jpg'].forEach(rel => {
            const full = path.join(publicDir, rel);
            if (fs.existsSync(full)) {
              const kb = Math.round(fs.statSync(full).size / 1024);
              console.log(`  [Cover] ${rel}: ${kb} KB ${kb <= 200 ? '✓' : '⚠️ (>200KB)'}`);
              if (kb > 200) oversizedImages.push(`${rel} (${kb}KB)`);
            } else {
              missingImages.push(rel);
            }
          });

          spotsData.forEach(s => {
            if (!s.verified) {
              unverifiedSpots.push(`[Spot 0${s.order}] ${s.name.zh} (${s.id})`);
            }

            // Check spot image
            const imgRel = s.media?.image;
            const fullImg = imgRel ? path.join(publicDir, imgRel) : null;
            let imgStatus = 'Missing (using SVG placeholder)';
            if (fullImg && fs.existsSync(fullImg)) {
              const kb = Math.round(fs.statSync(fullImg).size / 1024);
              imgStatus = `${kb} KB ${kb <= 200 ? '✓' : '⚠️ (>200KB)'}`;
              if (kb > 200) oversizedImages.push(`${imgRel} (${kb}KB)`);
            } else {
              missingImages.push(`${s.id}: ${imgRel}`);
            }

            // Check spot audio
            const audRel = s.media?.audio;
            const fullAud = audRel ? path.join(publicDir, audRel) : null;
            let audStatus = 'Field MP3 ✓';
            if (!fullAud || !fs.existsSync(fullAud)) {
              audStatus = 'Procedural Web Audio Synth (Placeholder)';
              synthesizedAudios.push(`[Spot 0${s.order}] ${s.name.zh} -> ${audRel}`);
            }

            console.log(
              `  [Spot 0${s.order}] ${s.name.zh} (${s.id}) | Verified: ${s.verified ? 'Yes ✓' : 'No 【待核实】'} | Image: ${imgStatus} | Audio: ${audStatus}`
            );
          });

          console.log('------------------------------------------------------------');
          console.log(`[Audit Summary] Unverified spots (${unverifiedSpots.length}):`, unverifiedSpots.length ? unverifiedSpots.join(', ') : 'None');
          console.log(`[Audit Summary] Missing images using placeholder (${missingImages.length}):`, missingImages.length ? missingImages.join(', ') : 'None');
          console.log(`[Audit Summary] Oversized images >200KB (${oversizedImages.length}):`, oversizedImages.length ? oversizedImages.join(', ') : 'None');
          console.log(`[Audit Summary] Audio slots using Web Audio synth placeholder (${synthesizedAudios.length}/7)`);
          console.log('============================================================\n');
        } catch (e) {
          console.warn('Audit plugin warning:', e.message);
        }
      }
    }
  ]
});
