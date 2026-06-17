import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';

async function main() {
  const url = 'https://www.behance.net/gallery/124621691/Samsung-Holidays-Mas-que-un-regalo';
  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/chrome-profile';
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: profilePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });

  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });

  // Scroll to bottom
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.getAttribute('src') || '',
      dataSrc: img.getAttribute('data-src') || '',
      srcset: img.getAttribute('srcset') || '',
      class: img.getAttribute('class') || '',
      parentClass: img.parentElement ? img.parentElement.getAttribute('class') || '' : ''
    }));
  });

  console.log(`Total images found: ${images.length}`);
  console.log("Sample images:");
  console.log(JSON.stringify(images.slice(0, 30), null, 2));

  await browser.close();
}

main().catch(console.error);
