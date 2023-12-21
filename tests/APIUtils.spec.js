const { test, expect, request } = require('@playwright/test');
const {APIUtils} = require('../utils/APIUtils');
const loginPlayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
const orderPayload = { orders: [{ country: "India", productOrderedId: "6262e990e26b7e1a10e89bfa" }] }
let response;

test.beforeAll(async () => {

        const apiContext = await request.newContext();
        const apiUtils = new APIUtils(apiContext,loginPlayLoad);
        response = await apiUtils.createOrder(orderPayload);

})

test('@API with API Product to buy', async ({ page }) => {
       
        page.addInitScript(value => {
                window.localStorage.setItem('token', value);
        }, response.token);

        await page.goto('https://rahulshettyacademy.com/client');

        await page.locator("button[routerlink*='myorders']").click();

        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");

        for (let i = 0; i < await rows.count(); ++i) {
                const rowOrderId = await rows.nth(i).locator("th").textContent();
                if (response.orderID.includes(rowOrderId)) {
                        await rows.nth(i).locator("button").first().click();
                }

        }

        const orderIdDerails = await page.locator(".col-text").textContent();
        await page.pause();
        expect(response.orderID.includes(orderIdDerails)).toBeTruthy();

})
