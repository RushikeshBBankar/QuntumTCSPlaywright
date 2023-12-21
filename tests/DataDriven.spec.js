const { test, expect } = require('@playwright/test');

const {POManager} = require('../PageObjectModal/POManager')


// To avoid Any issue convert it to string
// Json -> string -> js object
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeordertestData.json')))


test('Product to buy', async ({ page }) => {

//        const product = await page.locator('.card-body')
//        const productName = 'adidas original';
//        const email = 'anshika@gmail.com';
//        const password = 'Iamking@000';

       const poManager = new POManager(page);
       const loginPage = poManager.getLoginPage();
       const dashBoard = poManager.getDashboardPage()
       const myCart = poManager.getMyCart();

       const thankYouPage = poManager.getThankPage()

       await loginPage.goto();
       await loginPage.validLogIn(dataSet.username,dataSet.password);

       await dashBoard.searchProductAddCart(dataSet.productName);
       await dashBoard.navigateToCart();

       await myCart.myCart()
       await myCart.checkOut()

       await expect(page.locator(".user__name label[type='text']")).toHaveText(dataSet.username)

       await myCart.submitCart()
       
       await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

       await thankYouPage.confirmOrder()

})


