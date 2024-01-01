const { test, expect } = require('@playwright/test');

const { POManager } = require('../PageObjectModal/POManager')

test('Product to buy', async ({ page }) => {
       const productName = 'adidas original';
       const email = 'anshika@gmail.com';
       const password = 'Iamking@000';

       const poManager = new POManager(page);

       const loginPage = poManager.getLoginPage();
       const dashBoard = poManager.getDashboardPage()
       const myCart = poManager.getMyCart();
       const thankYouPage = poManager.getThankPage()

       await loginPage.goto();
       await loginPage.validLogIn(email, password);

       await dashBoard.searchProductAddCart(productName);
       await dashBoard.navigateToCart();

       await myCart.myCart()
       await myCart.checkOut()

       await expect(page.locator(".user__name label[type='text']")).toHaveText(email)

       await myCart.submitCart()

       await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

       await thankYouPage.confirmOrder()
})