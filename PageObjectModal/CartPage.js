class CartPage{
        constructor(page){
                this.addedProductName = page.locator('.cartSection h3');
                this.checkOutButton = page.locator("text=checkout");
                this.countryName = page.locator("[placeholder*='Country']");
                this.dropDownResult = page.locator('.ta-results');
                this.userNameLabel = page.locator(".user__name label[type='text']");
                this.submit = page.locator(".action__submit");
                

        }
        async myCart(){
                const addedProduct = await this.addedProductName.isVisible()
                console.log(addedProduct)                
        }
        
        async checkOut(){
                await this.checkOutButton.click();
                await this.countryName.pressSequentially("ind")
         
                const dropDown = await this.dropDownResult;
                await dropDown.waitFor();
                const optionCount = await dropDown.locator('button').count();
         
                for (let i = 0; i < optionCount; ++i) {
                       const text = await dropDown.locator('button').nth(i).textContent();
                       if (text === " India") {
                              await dropDown.locator("button").nth(i).click()
                              break;
                       }
                }
         
             

        } 

        async submitCart(){
                await this.submit.click();

        }
}

module.exports = {CartPage};