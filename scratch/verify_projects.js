import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  const url = 'http://localhost:8000/trabajo.html';
  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/chrome-profile';
  
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: profilePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });

  page.on('console', msg => console.log(`[BROWSER CONSOLE] ${msg.text()}`));
  page.on('pageerror', err => console.error(`[BROWSER ERROR] ${err}`));

  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait 1000ms
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Screenshot 1: Initial layout showing the new Samsung cards (scroll to bottom of Samsung section)
  console.log("Scrolling to new Samsung cards...");
  await page.evaluate(() => {
    const el = document.querySelector('[data-group-id="galaxy_m"]');
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const ss1 = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/verify_samsung_new_cards.png';
  await page.screenshot({ path: ss1 });
  console.log(`Saved screenshot 1 to ${ss1}`);

  // Test opening a new group modal (Knox)
  console.log("Opening Knox group modal...");
  await page.evaluate(() => {
    const card = document.querySelector('[data-group-id="knox"]');
    const openBtn = card.querySelector('.btn-open-group');
    if (openBtn) openBtn.click();
  });
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  const ss2 = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/verify_knox_modal.png';
  await page.screenshot({ path: ss2 });
  console.log(`Saved screenshot 2 to ${ss2}`);

  // Click on the first item in the Knox modal to trigger the lightbox
  console.log("Clicking first sub-item inside Knox modal to trigger lightbox...");
  await page.evaluate(() => {
    const modalGrid = document.getElementById('group-modal-grid');
    const items = modalGrid.querySelectorAll('.group-card-item');
    if (items.length > 0) items[0].click();
  });

  await new Promise(resolve => setTimeout(resolve, 1000));

  const ss3 = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/verify_knox_lightbox.png';
  await page.screenshot({ path: ss3 });
  console.log(`Saved screenshot 3 to ${ss3}`);

  // Close lightbox
  console.log("Closing lightbox...");
  await page.keyboard.press('Escape');
  await new Promise(resolve => setTimeout(resolve, 500));

  // Close group modal
  console.log("Closing group modal...");
  await page.evaluate(() => {
    const closeBtn = document.querySelector('.group-modal-close-btn');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(resolve => setTimeout(resolve, 500));

  // Test English language switch
  console.log("Switching to English...");
  await page.evaluate(() => {
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    if (enBtn) enBtn.click();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Scroll to Verden card in branding section
  console.log("Scrolling to Verden card...");
  await page.evaluate(() => {
    const el = document.querySelector('[data-group-id="verden"]');
    if (el) el.scrollIntoView({ block: 'center' });
  });
  await new Promise(resolve => setTimeout(resolve, 1000));

  const ss4 = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/verify_verden_card_en.png';
  await page.screenshot({ path: ss4 });
  console.log(`Saved screenshot 4 to ${ss4}`);

  // Open Verden modal
  console.log("Opening Verden modal...");
  await page.evaluate(() => {
    const card = document.querySelector('[data-group-id="verden"]');
    const openBtn = card.querySelector('.btn-open-group');
    if (openBtn) openBtn.click();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));

  const ss5 = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/verify_verden_modal_en.png';
  await page.screenshot({ path: ss5 });
  console.log(`Saved screenshot 5 to ${ss5}`);

  await browser.close();
  console.log("Verification finished successfully!");
}

main().catch(console.error);
