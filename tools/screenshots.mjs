import { chromium } from 'playwright';
import sharp from 'sharp';
const pages = ['', 'chronicle/', 'company/', 'company/jack-of-blades/', 'kingdom/', 'people/', 'bestiary/', 'gallery/'];
const b = await chromium.launch();
for (const [label, w, h] of [['m', 390, 844], ['d', 1440, 900]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: label === 'm' ? 2 : 1 });
  const p = await ctx.newPage();
  for (const pg of pages) {
    await p.goto('http://localhost:4791/altheim/' + pg, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await p.waitForTimeout(500);
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const name = (pg.replace(/\//g, '_') || 'home') + '-' + label;
    const buf = await p.screenshot({ fullPage: true });
    const meta = await sharp(buf).metadata();
    const seg = label === 'm' ? 2200 : 1800;
    let n = 0;
    for (let y = 0; y < meta.height; y += seg) {
      await sharp(buf).extract({ left: 0, top: y, width: meta.width, height: Math.min(seg, meta.height - y) }).resize({ width: label === 'm' ? 600 : 1200 }).jpeg({ quality: 70 }).toFile('./shots/' + name + '-' + (n++) + '.jpg');
    }
    console.log(name, 'overflow', ov, 'segments', n);
  }
}
await b.close();
