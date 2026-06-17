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

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });

  // Wait for 5 seconds to see if spinners resolve
  console.log("Waiting 5000ms...");
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Let's scroll up and down multiple times
  console.log("Scrolling up and down to trigger loading...");
  for (let i = 0; i < 3; i++) {
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  const modulesHTML = await page.evaluate(() => {
    const modules = Array.from(document.querySelectorAll('.project-module, div[class*="module"]'));
    return modules.map((m, idx) => ({
      index: idx,
      class: m.getAttribute('class'),
      innerHTML: m.innerHTML
    }));
  });

  console.log(`Found ${modulesHTML.length} modules.`);
  modulesHTML.forEach(m => {
    console.log(`\n--- Module ${m.index} (${m.class}) ---`);
    console.log(m.innerHTML.substring(0, 1000));
  });

  await browser.close();
}

main().catch(console.error);
