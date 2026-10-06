import { chromium } from 'playwright';
const pages = ['', 'chronicle/', 'company/', 'company/jack-of-blades/', 'company/cocoa/', 'kingdom/', 'people/', 'bestiary/', 'gallery/'];
const b = await chromium.launch();
for (const w of [390, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  for (const pg of pages) {
    await p.goto('http://localhost:4791/altheim/' + pg, { waitUntil: 'networkidle' });
    const bad = await p.evaluate(() => {
      const out = [];
      const vis = (el) => { const r = el.getBoundingClientRect(); return r.height > 0; };
      // previous/next visible element in document flow (skip eyebrows as attached labels)
      const all = [...document.querySelectorAll('main *')].filter(e => vis(e) && (e.children.length === 0 || e.tagName === 'P' || e.tagName === 'LI'));
      for (const h of document.querySelectorAll('main h1, main h2, main h3')) {
        const r = h.getBoundingClientRect();
        let top = r.top;
        const eb = h.previousElementSibling;
        if (eb && eb.classList.contains('eyebrow')) top = eb.getBoundingClientRect().top;
        let n = h.nextElementSibling; while (n && !vis(n)) n = n.nextElementSibling;
        const below = n ? n.getBoundingClientRect().top - r.bottom : null;
        // previous content: preceding, non-ancestor, visible elements; nearest bottom above
        let prevBottom = null;
        for (const e of all) {
          if (e === h || e.contains(h) || h.contains(e) || e === eb) continue;
          if (!(e.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
          const b = e.getBoundingClientRect().bottom;
          if (b <= top + 1 && (prevBottom === null || b > prevBottom)) prevBottom = b;
        }
        const above = prevBottom === null ? 999 : top - prevBottom;
        if (below !== null && above <= below) out.push(`${h.tagName} "${h.textContent.trim().slice(0,30)}" above=${Math.round(above)} below=${Math.round(below)}`);
      }
      return out;
    });
    if (bad.length) console.log(w, pg || 'home', bad);
  }
}
console.log('audit done');
await b.close();
