const { test, expect } = require('@playwright/test');

test('@web test validate log in ', async ({ page }) => {

        const userName = page.locator('#username');
        const password = page.locator("[type='password']");
        const LogIn = page.locator('#signInBtn')
        const cardTitle = page.locator('.card-body a')
        
        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
     

        await userName.fill('rahulshettyacademy');
        await password.fill('learning')
        await LogIn.click();

        //Print tile single at one time
        console.log(await page.locator('.card-body a').first().textContent());
        console.log(await page.locator('.card-body a').nth(1).textContent());
        console.log(await page.locator('.card-body a').nth(2).textContent());
        console.log(await page.locator('.card-body a').last().textContent());
        
        //Print all title at one time
        const allTitle = await cardTitle.allInnerTexts()
        console.log(allTitle);

})