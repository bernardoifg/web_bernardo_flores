import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
import fs from 'node:fs';
import path from 'node:path';

// List of targeted Behance projects to download
const TARGET_PROJECTS = [
  {
    key: 'holiday_2',
    title: 'Samsung Holidays / Más que un regalo',
    url: 'https://www.behance.net/gallery/124621691/Samsung-Holidays-Mas-que-un-regalo'
  }
];

const IMAGES_DIR = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/images';

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    return false;
  }
}

async function downloadBestQuality(scrapedUrl, destPath) {
  if (scrapedUrl.includes('/project_modules/')) {
    // Pattern: (https://mir-s3-cdn-cf.behance.net/project_modules/)(module_type)(/filename_hash.ext)
    const match = scrapedUrl.match(/(https:\/\/mir-s3-cdn-cf\.behance\.net\/project_modules\/)([^\/]+)(\/.+)/);
    if (match) {
      const prefix = match[1];
      const origQual = match[2];
      const suffix = match[3];

      // Try qualities in order
      const qualities = ['source', '1400', '1400_opt_1', 'max_1200'];
      if (!qualities.includes(origQual)) {
        qualities.push(origQual);
      }

      for (const qual of qualities) {
        const testUrl = `${prefix}${qual}${suffix}`;
        const success = await downloadFile(testUrl, destPath);
        if (success) {
          return { successUrl: testUrl, quality: qual };
        }
      }
    }
  }

  // Fallback direct download
  const success = await downloadFile(scrapedUrl, destPath);
  return success ? { successUrl: scrapedUrl, quality: 'fallback' } : null;
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/chrome-profile';
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: profilePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });

  const downloadResults = {};

  for (const project of TARGET_PROJECTS) {
    console.log(`\n========================================`);
    console.log(`Processing project: ${project.title}`);
    console.log(`URL: ${project.url}`);
    console.log(`========================================`);

    try {
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 90000 });

      // Dynamic scrolling to trigger lazy-loaded project content
      console.log("Scrolling slowly to bottom to trigger lazy loading of body images...");
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            // Stop scrolling if we reached the bottom
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 150);
        });
      });

      // Extra sleep for lazy-load completion
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Extract all project modules images
      const imageUrls = await page.evaluate(() => {
        const imgElements = Array.from(document.querySelectorAll('div.project-module img, img[class*="image"], div[class*="module"] img, img'));
        
        const urls = imgElements.map(img => {
          const src = img.getAttribute('src') || '';
          const dataSrc = img.getAttribute('data-src') || '';
          const srcSet = img.getAttribute('srcset') || '';
          
          let finalSrc = src;
          if (dataSrc) finalSrc = dataSrc;
          else if (srcSet) {
            // Take the first URL from srcset
            finalSrc = srcSet.split(',')[0].split(' ')[0];
          }
          return finalSrc.trim();
        }).filter(src => {
          // Keep only Behance CDN project module images
          return src.includes('behance.net') && 
                 src.includes('/project_modules/') && 
                 !src.includes('avatar') && 
                 !src.includes('profile');
        });

        // Dedup urls
        return Array.from(new Set(urls));
      });

      console.log(`Found ${imageUrls.length} images inside project body.`);
      
      downloadResults[project.key] = {
        title: project.title,
        url: project.url,
        downloadedImages: []
      };

      // Download each image using cascade quality
      for (let idx = 0; idx < imageUrls.length; idx++) {
        const imgUrl = imageUrls[idx];
        
        let ext = '.jpg';
        if (imgUrl.toLowerCase().includes('.png')) ext = '.png';
        if (imgUrl.toLowerCase().includes('.jpeg')) ext = '.jpeg';
        if (imgUrl.toLowerCase().includes('.gif')) ext = '.gif';

        const filename = `${project.key}_${idx}${ext}`;
        const destPath = path.join(IMAGES_DIR, filename);

        console.log(`Downloading image ${idx + 1}/${imageUrls.length}: ${filename}...`);
        const result = await downloadBestQuality(imgUrl, destPath);
        if (result) {
          console.log(`  -> Saved as ${filename} (Quality: ${result.quality})`);
          downloadResults[project.key].downloadedImages.push({
            localPath: `./assets/images/${filename}`,
            downloadedUrl: result.successUrl,
            quality: result.quality
          });
        } else {
          console.error(`  -> Failed to download: ${imgUrl}`);
        }
      }

    } catch (err) {
      console.error(`Error processing project ${project.title}:`, err);
    }
  }

  // Save download summary
  const outPath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/behance_downloads_summary.json';
  const outDir = path.dirname(outPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(outPath, JSON.stringify(downloadResults, null, 2));
  console.log(`\n========================================`);
  console.log(`Downloads finished! Summary saved to ${outPath}`);
  console.log(`========================================`);

  await browser.close();
}

main().catch(err => {
  console.error("Fatal error in downloader:", err);
  process.exit(1);
});
