const {LoginPage} = require('./LoginPage')
const {DashBoardPage} = require('./DashBoardPage')
const {CartPage} = require('./CartPage')
const {ThankYouPage} = require('./ThankYouPage')

class POManager{
        constructor(page){
                this.page = page
                this.loginPage = new LoginPage(this.page)
                this.dashBoard = new DashBoardPage(this.page)
                this.myCart = new CartPage(page);
                this.thankYouPage = new ThankYouPage(page);
        }

        //create a custom method

        getLoginPage(){
                return this.loginPage;
        }

        getDashboardPage(){
                return this.dashBoard;
        }

        getMyCart(){
                return this.myCart;
        }

        getThankPage(){
                return this.thankYouPage;
        }


}

module.exports = {POManager};