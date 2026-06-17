import { puppeteer } from '/Applications/Antigravity.app/Contents/Resources/app.asar.unpacked/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';

async function main() {
  const url = 'https://www.behance.net/gallery/124621691/Samsung-Holidays-Mas-que-un-regalo';
  const profilePath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores_alt/chrome-profile';
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

  const title = await page.title();
  console.log(`Page Title: ${title}`);

  const htmlContent = await page.evaluate(() => {
    // Check if there is an error page or if it redirected
    const bodyText = document.body.innerText;
    const projectModuleCount = document.querySelectorAll('div.project-module, .project-module').length;
    const imgCount = document.querySelectorAll('img').length;
    const contentImgCount = document.querySelectorAll('.project-module img').length;
    
    return {
      bodyLength: bodyText.length,
      bodyTextSnippet: bodyText.substring(0, 500),
      projectModuleCount,
      imgCount,
      contentImgCount,
      url: window.location.href
    };
  });

  console.log("HTML Content stats:", JSON.stringify(htmlContent, null, 2));

  // Take a screenshot of the debugged page to see what's on it
  const screenshotPath = '/Users/bherflow/.gemini/antigravity/scratch/web_bernardo_flores/assets/screenshots/holiday_2_debug.png';
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
}

main().catch(console.error);
