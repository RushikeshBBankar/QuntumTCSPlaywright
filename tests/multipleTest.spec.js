const { test, expect } = require('@playwright/test');

//Normally tests are run in sequential
//if you want to run each test case in parallel mode.

test.describe.configure({mode: "parallel"})




test('validation', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        const show = await page.locator('#displayed-text')
        
        await expect(show).toBeVisible();
        await page.locator('#hide-textbox').click();

        await expect(show).toBeHidden();

})

test('validation of screen shot', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        const show = await page.locator('#displayed-text')
        

        await expect(show).toBeVisible();
        //take a screen shot 
        await page.locator('#displayed-text').screenshot({path: 'partialScreen.png'})
        await page.screenshot({path: 'screenshot.png'})
        
        await page.locator('#hide-textbox').click();

        await expect(show).toBeHidden();

})
