class LoginPage {
        constructor(page) {
                this.page = page;
                this.username = page.locator('#userEmail');
                this.password = page.locator('#userPassword');
                this.signInButton = page.locator('#login');

        }

        async goto(){
                await this.page.goto('https://rahulshettyacademy.com/client');
        }

        async validLogIn(username,pass){
                await this.username.fill(username);
                await this.password.fill(pass);
                await this.signInButton.click();
                await this.page.waitForLoadState('networkidle');
        }
}

module.exports = {LoginPage};