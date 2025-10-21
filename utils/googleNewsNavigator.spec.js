  // googleNewsNavigator.spec.js -- Navigating --> Google.com --> Google Apps --> Google News
  const { chromium } = require('playwright');

  async function login(page, username, password) {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#loginButton');
  }

  module.exports = { login }; // Exporting the function