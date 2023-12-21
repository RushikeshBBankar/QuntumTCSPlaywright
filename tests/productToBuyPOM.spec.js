const { test, expect } = require('@playwright/test');

const {LoginPage} = require('../PageObjectModal/LoginPage');
const{DashBoardPage}=require('../PageObjectModal/DashBoardPage')
const {CartPage} = require('../PageObjectModal/CartPage');
const{ThankYouPage} = require('../PageObjectModal/ThankYouPage');


test('Product to buy', async ({ page }) => {

       const product = await page.locator('.card-body')
       const productName = 'adidas original';
       const email = 'anshika@gmail.com';
       const password = 'Iamking@000';

       const loginPage = new LoginPage(page)
       const dashBoard = new DashBoardPage(page)
       const myCart = new CartPage(page);
       const thankYouPage = new ThankYouPage(page);

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
       
       // const orderIdDerails  = await page.locator(".col-text").textContent();
       // expect(orderID.includes(orderIdDerails)).toBeTruthy();



      // await page.goto('https://rahulshettyacademy.com/client');
//        await page.locator('#userEmail').fill(email);
//        await page.locator('#userPassword').fill(password);
//        await page.locator('#login').click();
      // await page.waitForLoadState('networkidle');


//        const titles = await page.locator('.card-body b').allTextContents();
//        console.log(titles);
//        const count = await product.count();
//        //Find the product 
//        for (let i = 0; i < count; ++i) {
//               if (await product.nth(i).locator('b').textContent() === productName) {
//                      //Add to cart 
//                      await product.nth(i).locator('text = Add To Cart').click();
//                      break;
//               }
//        }

//        await page.locator('.btn-custom .fa-shopping-cart').click();
       //handle a page load 
       //await page.locator('div li').waitFor()


       //Cart page


       // const addedProduct = await page.locator('.cartSection h3').isVisible()
       // console.log(addedProduct)
       // //expect(addedProduct).toBeTruthy()

       // await page.locator("text=checkout").click();
       // await page.locator("[placeholder*='Country']").pressSequentially("ind")
       // //fill('ind',{delay: 100});

       // const dropDown = await page.locator('.ta-results');
       // await dropDown.waitFor();
       // const optionCount = await dropDown.locator('button').count();

       // for (let i = 0; i < optionCount; ++i) {
       //        const text = await dropDown.locator('button').nth(i).textContent();
       //        //if(text.trim() === "India")
       //        //if(text.includes("India"))
       //        if (text === " India") {
       //               await dropDown.locator("button").nth(i).click()
       //               break;
       //        }
       // }

       // //await page.pause();

       // await expect(page.locator(".user__name label[type='text']")).toHaveText(email);
       // await page.locator(".action__submit").click();

      // await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ")
       // const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
       // console.log(orderID);
       // await page.locator("button[routerlink*='myorders']").click();

       // await page.locator("tbody").waitFor();
       // const rows = await page.locator("tbody tr");

       // for(let i = 0; i< await rows.count(); ++i)
       // {
       //        const rowOrderId =  await rows.nth(i).locator("th").textContent();
       //        if(orderID.includes(rowOrderId))
       //        {
       //               await rows.nth(i).locator("button").first().click();                     
       //        }

       // }

       // const orderIdDerails  = await page.locator(".col-text").textContent();
       // expect(orderID.includes(orderIdDerails)).toBeTruthy();



})


