const { test, expect } = require('@playwright/test');

test('@web validation', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        const show = await page.locator('#displayed-text')
        

        await expect(show).toBeVisible();
        //take a screen shot 
        await page.locator('#displayed-text').screenshot({path: 'partialScreen.png'})
        await page.screenshot({path: 'screenshot.png'})
        
        await page.locator('#hide-textbox').click();

        await expect(show).toBeHidden();

})