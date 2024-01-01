const { test, expect } = require('@playwright/test');

test('Alert pop up handling', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        const framesPage = page.frameLocator("#courses-iframe");
        await framesPage.locator("li a[href*='lifetime-access']:visible").click();
        const textCheck = await framesPage.locator(".text h2").textContent();
        console.log(textCheck)
})