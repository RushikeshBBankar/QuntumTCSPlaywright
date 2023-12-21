const { test, expect } = require('@playwright/test');
const { on } = require('events');

test('Alert pop up handling', async ({ page }) => {
        await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
        //accept alert message
        await page.locator('#confirmbtn').click();
        await page.on('dialog', dialog => dialog.accept());

        //Dismiss the alert.
        await page.locator('#confirmbtn').click();
        await page.on('dialog', dialog => dialog.dismiss());
})