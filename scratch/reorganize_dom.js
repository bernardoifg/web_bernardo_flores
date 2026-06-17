import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
import fs from 'node:fs';
import path from 'node:path';

const TRABAJO_HTML_PATH = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/trabajo.html';
const MAIN_JS_PATH = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/assets/js/main.js';
const I18N_JS_PATH = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/assets/js/i18n.js';

async function main() {
  // 1. Temporarily rename JS files so they don't execute and mutate the static HTML on load
  console.log("Temporarily disabling JS files...");
  fs.renameSync(MAIN_JS_PATH, MAIN_JS_PATH + '.tmp');
  fs.renameSync(I18N_JS_PATH, I18N_JS_PATH + '.tmp');

  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/chrome-profile';
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: profilePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 1200 });

    const fileUrl = `file://${TRABAJO_HTML_PATH}`;
    console.log(`Loading page: ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });

    // 2. Rearrange the DOM elements
    console.log("Rearranging DOM...");
    await page.evaluate(() => {
      // Helper function to parse HTML string into DOM Node
      const parseHTML = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstElementChild; // Safe from comments
      };

      // Remove all Lote tags from all bento cards
      document.querySelectorAll('.bento-tag').forEach(tag => {
        if (tag.textContent.trim() === 'Lote') {
          tag.remove();
        }
      });

      // Find grids
      const samsungGrid = document.querySelector('#samsung .bento-grid');
      const brandingGrid = document.querySelector('#branding .bento-grid');

      if (!samsungGrid || !brandingGrid) {
        throw new Error("Samsung or Branding grid not found!");
      }

      // Collect all cards
      const cards = {};

      // Collect group cards
      document.querySelectorAll('.bento-item[data-group-id]').forEach(el => {
        const groupId = el.getAttribute('data-group-id');
        cards[groupId] = el;
      });

      // Collect single cards
      document.querySelectorAll('.bento-item[data-full]').forEach(el => {
        const full = el.getAttribute('data-full') || '';
        if (full.includes('3854436_1_orig.jpg')) cards['focus'] = el;
        else if (full.includes('9162129_1_orig.jpg')) cards['galaxy'] = el;
        else if (full.includes('9554709_1_orig.jpg')) cards['glamrebel'] = el;
        else if (full.includes('3527946_1_orig.jpg')) cards['strongsweet'] = el;
        else if (full.includes('colibri_1_orig.jpg')) cards['colibri'] = el;
        else if (full.includes('lagartija_1_orig.jpg')) cards['lagartija'] = el;
        else if (full.includes('2628607_1_orig.jpg')) cards['vuelve'] = el;
        else if (full.includes('budslive-keeponly_1_orig.jpg')) cards['buds'] = el;
        else if (full.includes('3196855_1_orig.jpg')) cards['kids'] = el;
        else if (full.includes('2240994_orig.jpg')) cards['corbatas'] = el;
        else if (full.includes('7943877_orig.jpg')) cards['regalos'] = el;
        else if (full.includes('9253084_orig.jpg')) cards['note10'] = el;
        else if (full.includes('5886739_1_orig.jpg')) cards['greenpeace'] = el;
        else if (full.includes('8570504_1_orig.jpg')) cards['alpen'] = el;
      });

      // Remove cards we are replacing or deleting
      if (cards['glamrebel']) cards['glamrebel'].remove();
      if (cards['strongsweet']) cards['strongsweet'].remove();
      if (cards['colibri']) cards['colibri'].remove();
      if (cards['lagartija']) cards['lagartija'].remove();
      if (cards['vuelve']) cards['vuelve'].remove();
      if (cards['kids']) cards['kids'].remove();

      // Create Pink Not Pink card DOM
      const pinkNotPinkHTML = `
        <!-- LOTE: Pink Not Pink -->
        <div class="bento-item bento-wide bento-group" data-group-id="pink_not_pink" data-category="samsung">
          <div class="bento-group-gallery">
            <div class="bento-group-main">
              <img src="./assets/images/9554709_1.jpg" alt="Pink Not Pink Portada" />
              <div class="bento-overlay"></div>
            </div>
            <div class="bento-group-thumbs">
              <div class="bento-group-thumb active" data-index="0">
                <img src="./assets/images/9554709_1.jpg" alt="Pink Not Pink – Glamrebel thumb" />
              </div>
              <div class="bento-group-thumb " data-index="1">
                <img src="./assets/images/3527946_1.jpg" alt="Pink Not Pink – Strongsweet thumb" />
              </div>
            </div>
          </div>
          <div class="bento-content">
            <div class="bento-tags"><span class="bento-tag">Samsung</span></div>
            <h3 class="bento-title">Pink Not Pink</h3>
            <p class="bento-description"><span class="group-count">2</span> <span data-i18n="desc.artes">Artes</span></p>
            <div class="bento-actions">
              <button class="bento-btn btn-primary btn-open-group" data-i18n="btn.open_lote">Ver</button>
            </div>
          </div>
          <div class="bento-group-data" style="display: none;">
            <div class="group-sub-item" data-full="./assets/images/9554709_1_orig.jpg" data-caption-key="cap.glamrebel"></div>
            <div class="group-sub-item" data-full="./assets/images/3527946_1_orig.jpg" data-caption-key="cap.strongsweet"></div>
          </div>
        </div>
      `;

      // Create Quick Step Camera card DOM
      const quickStepHTML = `
        <!-- LOTE: Quick Step Camera -->
        <div class="bento-item bento-group" data-group-id="quick_step" data-category="samsung">
          <div class="bento-group-gallery">
            <div class="bento-group-main">
              <img src="./assets/images/colibri_1.jpg" alt="Quick Step Camera Portada" />
              <div class="bento-overlay"></div>
            </div>
            <div class="bento-group-thumbs">
              <div class="bento-group-thumb active" data-index="0">
                <img src="./assets/images/colibri_1.jpg" alt="Quick Step Camera – Colibrí thumb" />
              </div>
              <div class="bento-group-thumb " data-index="1">
                <img src="./assets/images/lagartija_1.jpg" alt="Quick Step Camera – Lagartija thumb" />
              </div>
            </div>
          </div>
          <div class="bento-content">
            <div class="bento-tags"><span class="bento-tag">Samsung</span></div>
            <h3 class="bento-title">Quick Step Camera</h3>
            <p class="bento-description"><span class="group-count">2</span> <span data-i18n="desc.artes">Artes</span></p>
            <div class="bento-actions">
              <button class="bento-btn btn-primary btn-open-group" data-i18n="btn.open_lote">Ver</button>
            </div>
          </div>
          <div class="bento-group-data" style="display: none;">
            <div class="group-sub-item" data-full="./assets/images/colibri_1_orig.jpg" data-caption-key="cap.colibri"></div>
            <div class="group-sub-item" data-full="./assets/images/lagartija_1_orig.jpg" data-caption-key="cap.lagartija"></div>
          </div>
        </div>
      `;

      const pinkNotPinkEl = parseHTML(pinkNotPinkHTML);
      const quickStepEl = parseHTML(quickStepHTML);

      // Reconstruct Samsung Section
      samsungGrid.innerHTML = '';
      const samsungOrder = [
        cards['iconx'],
        cards['switch'],
        cards['focus'],
        cards['galaxy'],
        pinkNotPinkEl,        // Pink Not Pink replaces Glamrebel/Strongsweet here
        cards['vr'],
        cards['a8'],
        cards['galaxy_m'],    // Galaxy M right after Galaxy A8
        cards['qled'],
        cards['s8pink'],
        cards['sos'],
        quickStepEl,          // Quick Step Camera replaces Colibri/Lagartija here
        cards['buds'],
        cards['cancer'],
        cards['svoice'],
        cards['comparte'],
        cards['gmusic'],
        cards['knox'],
        cards['s7_launch'],
        cards['back_to_school'],
        cards['samsung_pay'],
        cards['store_rappi'],
        cards['holidays'],
        cards['corbatas'],     // Corbatas at the bottom
        cards['regalos'],      // Mejores Regalos at the bottom
        cards['note10']        // Note 10.1 at the bottom
      ];

      samsungOrder.forEach(el => {
        if (el) {
          samsungGrid.appendChild(el);
          el.setAttribute('data-category', 'samsung');
        } else {
          console.warn("Found an undefined card in samsungOrder!");
        }
      });

      // Update B2B Estrategia and move to Branding Grid after Verden
      const b2bCard = cards['b2b'];
      if (b2bCard) {
        b2bCard.remove();
        b2bCard.setAttribute('data-category', 'advertising');
        const b2bTagsContainer = b2bCard.querySelector('.bento-tags');
        if (b2bTagsContainer) {
          b2bTagsContainer.innerHTML = '<span class="bento-tag">B2B</span><span class="bento-tag">Branding</span>';
        }
        
        const verdenCard = cards['verden'];
        if (verdenCard) {
          verdenCard.after(b2bCard);
        } else {
          brandingGrid.appendChild(b2bCard);
        }
      }
    });

    // Extract HTML
    const htmlContent = await page.content();
    
    // Save back to trabajo.html
    fs.writeFileSync(TRABAJO_HTML_PATH, htmlContent);
    console.log("Successfully saved modified HTML to trabajo.html!");

  } catch (err) {
    console.error("Error modifying DOM:", err);
  } finally {
    if (typeof browser !== 'undefined' && browser) {
      try {
        await browser.close();
      } catch (e) {}
    }

    // 3. Restore JS files
    console.log("Restoring JS files...");
    if (fs.existsSync(MAIN_JS_PATH + '.tmp')) {
      fs.renameSync(MAIN_JS_PATH + '.tmp', MAIN_JS_PATH);
    }
    if (fs.existsSync(I18N_JS_PATH + '.tmp')) {
      fs.renameSync(I18N_JS_PATH + '.tmp', I18N_JS_PATH);
    }
  }
}

main().catch(console.error);
