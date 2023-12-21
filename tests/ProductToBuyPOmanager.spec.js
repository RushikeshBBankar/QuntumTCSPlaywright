const { test, expect } = require('@playwright/test');


const {POManager} = require('../PageObjectModal/POManager')

// const {LoginPage} = require('../PageObjectModal/LoginPage');
// const{DashBoardPage}=require('../PageObjectModal/DashBoardPage')
// const {CartPage} = require('../PageObjectModal/CartPage');
// const{ThankYouPage} = require('../PageObjectModal/ThankYouPage');


test('Product to buy', async ({ page }) => {

       const product = await page.locator('.card-body')
       const productName = 'adidas original';
       const email = 'anshika@gmail.com';
       const password = 'Iamking@000';

       const poManager = new POManager(page);
       
       //const loginPage = new LoginPage(page)
       const loginPage = poManager.getLoginPage();
       
       //const dashBoard = new DashBoardPage(page)
       const dashBoard = poManager.getDashboardPage()

       //const myCart = new CartPage(page);
       const myCart = poManager.getMyCart();

       //const thankYouPage = new ThankYouPage(page);
       const thankYouPage = poManager.getThankPage()

       await loginPage.goto();
       await loginPage.validLogIn(email,password);

       await dashBoard.searchProductAddCart(productName);
       await dashBoard.navigateToCart();

       await myCart.myCart()
       await myCart.checkOut()

       await expect(page.locator(".user__name label[type='text']")).toHaveText(email)

       await myCart.submitCart()
       
       await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

       await thankYouPage.confirmOrder()

})


