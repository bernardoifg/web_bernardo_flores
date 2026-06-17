import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
import fs from 'node:fs';

async function main() {
  const profileUrl = 'https://www.behance.net/bherflow';
  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/chrome-profile';
  
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: profilePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200 });

  page.on('console', msg => console.log(`[BROWSER CONSOLE] ${msg.text()}`));
  page.on('pageerror', err => console.error(`[BROWSER ERROR] ${err}`));

  console.log(`Navigating to Behance profile: ${profileUrl}...`);
  await page.goto(profileUrl, { waitUntil: 'networkidle2' });

  console.log("Waiting 3000ms for projects to settle...");
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log("Scrolling down to load all lazy-loaded projects...");
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  // Scroll back to top to take a screenshot of the projects
  console.log("Scrolling back to top...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 1000));

  const screenshotPath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/assets/screenshots/behance_profile_top.png';
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Saved screenshot of profile top to ${screenshotPath}`);

  // Debug links
  const linkDetails = await page.evaluate(() => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    const galleryLinks = allLinks.filter(a => (a.getAttribute('href') || '').includes('/gallery/'));
    
    return {
      totalLinks: allLinks.length,
      totalGalleryLinks: galleryLinks.length,
      sampleGalleryLinks: galleryLinks.slice(0, 15).map(a => ({
        href: a.getAttribute('href'),
        text: a.textContent.trim(),
        html: a.outerHTML.substring(0, 200)
      }))
    };
  });

  console.log("Link Details:", JSON.stringify(linkDetails, null, 2));

  // Extract all projects using the gallery links we found
  const projects = await page.evaluate(() => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    
    // Find all links that point to a gallery project
    const galleryLinks = allLinks.filter(a => {
      const href = a.getAttribute('href') || '';
      return href.includes('/gallery/');
    });

    const uniqueProjects = [];
    const seenUrls = new Set();

    galleryLinks.forEach(linkEl => {
      const href = linkEl.getAttribute('href');
      if (!href) return;
      const fullUrl = href.startsWith('http') ? href : 'https://www.behance.net' + href;
      if (seenUrls.has(fullUrl)) return;
      seenUrls.add(fullUrl);

      // Find title
      // Try to find title in standard behance layout: inside a sibling/child with class containing 'title'
      let title = '';
      // Let's try to look for the title text within the card container
      const container = linkEl.closest('[class*="ProjectCover-cover-"], [class*="Grid-gridItem-"], div');
      if (container) {
        const titleTextEl = container.querySelector('[class*="title"], [class*="Title"], a[class*="title"]');
        if (titleTextEl) {
          title = titleTextEl.textContent.trim();
        }
      }

      // If no title found, check alt of image
      if (!title) {
        const img = linkEl.querySelector('img');
        if (img) title = img.getAttribute('alt') || img.getAttribute('title') || '';
      }

      // If still no title, use text content
      if (!title) {
        title = linkEl.textContent.trim();
      }

      // Clean up title
      title = title.replace(/\s+/g, ' ').trim();

      // Find image
      let imgUrl = '';
      const imgEl = linkEl.querySelector('img');
      if (imgEl) {
        imgUrl = imgEl.getAttribute('src') || imgEl.getAttribute('data-src') || '';
      }

      uniqueProjects.push({
        title: title || 'Untitled Project',
        url: fullUrl,
        imgUrl
      });
    });

    return uniqueProjects;
  });

  console.log(`Successfully scraped ${projects.length} projects from Behance.`);
  
  // Save results
  const outPath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/behance_projects.json';
  fs.writeFileSync(outPath, JSON.stringify(projects, null, 2));
  console.log(`Saved projects metadata to ${outPath}`);

  await browser.close();
}

main().catch(err => {
  console.error("Fatal error during scraping:", err);
  process.exit(1);
});
