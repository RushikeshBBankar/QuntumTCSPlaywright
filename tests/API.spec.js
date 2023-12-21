const { test, expect, request } = require('@playwright/test');

const loginPlayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
const orderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }
let token;
let orderID;


test.beforeAll(async () => {
        const apiContext = await request.newContext();
        const logInResponse = await apiContext.post("https://www.rahulshettyacademy.com/api/ecom/auth/login",
                {
                        data: loginPlayLoad
                })
        expect(logInResponse.ok()).toBeTruthy();
        const logInResponseJson = await logInResponse.json();
        token = logInResponseJson.token;
        console.log(token)

        const orderResponse = await apiContext.post('https://www.rahulshettyacademy.com/api/ecom/order/create-order',
                {
                        data: orderPayload,
                        headers: {
                                'Authorization': token,
                                'Content-Type': 'application/json'
                        },

                })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson)
        orderID = orderResponseJson.orders[0];
        console.log(orderID)

})

test('@API with API Product to buy', async ({ page }) => {
        //Skip the log in process using API to reduce th time of execution

        page.addInitScript(value => {
                window.localStorage.setItem('token', value);
        }, token);

        await page.goto('https://rahulshettyacademy.com/client');

        await page.locator("button[routerlink*='myorders']").click();

        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");

        for (let i = 0; i < await rows.count(); ++i) {
                const rowOrderId = await rows.nth(i).locator("th").textContent();
                if (orderID.includes(rowOrderId)) {
                        await rows.nth(i).locator("button").first().click();
                }

        }

        const orderIdDerails = await page.locator(".col-text").textContent();
        await page.pause();
        expect(orderID.includes(orderIdDerails)).toBeTruthy();

})

// Verify if order created is showing in history page
//Precondition - order ID