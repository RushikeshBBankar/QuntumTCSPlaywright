const { test, expect } = require('@playwright/test');

//Screenshot -store -> screenshot-> 

test('validation', async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/');
        //take a screen shot 
       expect(await page.screenshot()).toMatchSnapshot('landing.png')
})