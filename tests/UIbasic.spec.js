const { test, expect } = require('@playwright/test');

// test('First Playwright test', async ({ browser }) => {
//         //Chrome plugins/cookies
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto('https://www.google.com/')

// })

test('First Playwright test open chrome', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        console.log(await page.title());
        await expect(page).toHaveTitle("OrangeHRM")
})