const { expect } = require('@playwright/test');
class ThankYouPage {
        constructor(page) {
                this.OrderIDNumber = page.locator(".em-spacer-1 .ng-star-inserted");
                this.orderButton = page.locator("button[routerlink*='myorders']");
                this.table = page.locator("tbody");
                this.tableRow = page.locator("tbody tr")
                this.orderDetails = page.locator(".col-text")


        }

        async confirmOrder() {

                const orderID = await this.OrderIDNumber.textContent();
                console.log(orderID);
                await this.orderButton.click();

                await this.table.waitFor();
                const rows = await this.tableRow;

                for (let i = 0; i < await rows.count(); ++i) {
                        const rowOrderId = await rows.nth(i).locator("th").textContent();
                        if (orderID.includes(rowOrderId)) {
                                await rows.nth(i).locator("button").first().click();
                        }

                }
                const orderIdDetails = await this.orderDetails.textContent();
                await expect(orderID.includes(orderIdDetails)).toBeTruthy();
        }
}

module.exports = { ThankYouPage };