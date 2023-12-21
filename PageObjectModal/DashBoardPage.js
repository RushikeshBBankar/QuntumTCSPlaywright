class DashBoardPage{
        constructor(page) {
                this.product = page.locator('.card-body');
                this.productText = page.locator('.card-body b')
                this.cart = page.locator('.btn-custom .fa-shopping-cart');
                this.cartPage =  page.locator('div li')
        }
        
        async searchProductAddCart(productName){
                const titles = await this.productText.allTextContents();
                console.log(titles);
                const count = await this.product.count();
                //Find the product 
                for (let i = 0; i < count; ++i) {
                        if (await this.product.nth(i).locator('b').textContent() === productName) {
                                //Add to cart 
                                await this.product.nth(i).locator('text = Add To Cart').click();
                                break;
                        }
                }

        }

        async navigateToCart(){
                await this.cart.click();
                //await this.cartPage.waitFor(); 
        }
}

module.exports = {DashBoardPage};