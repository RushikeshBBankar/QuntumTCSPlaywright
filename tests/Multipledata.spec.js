const { test, expect } = require('@playwright/test');

const { POManager } = require('../PageObjectModal/POManager')


// To avoid Any issue convert it to string
// Json -> string -> js object
const dataSet = JSON.parse(JSON.stringify(require('../utils/multidata.json')))


for (const user of dataSet) {

        test(`Product to buy ${user.productName}`, async ({ page }) => {

                const poManager = new POManager(page);
                const loginPage = poManager.getLoginPage();
                const dashBoard = poManager.getDashboardPage()
                const myCart = poManager.getMyCart();

                const thankYouPage = poManager.getThankPage()

                await loginPage.goto();
                await loginPage.validLogIn(user.username, user.password);

                await dashBoard.searchProductAddCart(user.productName);
                await dashBoard.navigateToCart();

                await myCart.myCart()
                await myCart.checkOut()

                await expect(page.locator(".user__name label[type='text']")).toHaveText(user.username)

                await myCart.submitCart()

                await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

                await thankYouPage.confirmOrder()

        })

}
