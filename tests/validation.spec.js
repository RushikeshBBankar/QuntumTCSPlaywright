const { test, expect } = require('@playwright/test');

test('validation', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        const show = await page.locator('#displayed-text')
        
        await expect(show).toBeVisible();
        await page.locator('#hide-textbox').click();

        await expect(show).toBeHidden();

})