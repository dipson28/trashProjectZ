
const { chromium } = require('playwright');

let context;

async function getBrowserContext() {
  if (!context) {
    const browser = await chromium.launch({ headless: true });
    context = await browser.newContext();

    // Optional: Add cookies, storage state, etc.
    // await context.addCookies([...]);
    // await context.setStorageState({ ... });
  }
  return context;
}

module.exports = { getBrowserContext };
