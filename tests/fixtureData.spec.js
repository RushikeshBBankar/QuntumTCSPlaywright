const { test, expect } = require('@playwright/test');

const {customTest} = require('../utils/test-base')

const {POManager} = require('../PageObjectModal/POManager')


customTest('Product to buy', async ({ page, testDataForOrder }) => {

       const poManager = new POManager(page);
       const loginPage = poManager.getLoginPage();
       const dashBoard = poManager.getDashboardPage()
       const myCart = poManager.getMyCart();

       const thankYouPage = poManager.getThankPage()

       await loginPage.goto();
       await loginPage.validLogIn(testDataForOrder.username,testDataForOrder.password);

       await dashBoard.searchProductAddCart(testDataForOrder.productName);
       await dashBoard.navigateToCart();

       await myCart.myCart()
       await myCart.checkOut()

       await expect(page.locator(".user__name label[type='text']")).toHaveText(testDataForOrder.username)

       await myCart.submitCart()
       
       await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

       await thankYouPage.confirmOrder()

})


