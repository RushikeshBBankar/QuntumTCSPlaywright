const { test, expect } = require('@playwright/test');

test('@web Drop down Control ', async ({ page }) => {
        const userName = page.locator('#username');
        const password = page.locator("[type='password']");
        const LogIn = page.locator('#signInBtn')
        const dropDown = page.locator('select.form-control')
        
        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');

        // fill the data
        await userName.fill('rahulshettyacademy');
        await password.fill('learning')

        //select radio button and confirm
        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click()

        //Assertion to check the radio button will be selected or not.
        await expect(page.locator('.radiotextsty').last()).toBeChecked
        await page.locator('.radiotextsty').last().isChecked()
        console.log(await page.locator('.radiotextsty').last().isChecked())

        const documentLink = page.locator("[href*='documents-request']")

        await expect(documentLink).toHaveAttribute("class", "blinkingText")


        //select dropdown
        await dropDown.selectOption('consult');
        
        //await LogIn.click();
        //await page.pause()

})