class APIUtils {

        constructor(apiContext, loginPlayLoad) {
                this.apiContext = apiContext;
                this.loginPlayLoad = loginPlayLoad;

        }

        async getToken() {
                const logInResponse = await this.apiContext.post("https://www.rahulshettyacademy.com/api/ecom/auth/login",
                        {
                                data: this.loginPlayLoad
                        })
                //expect(logInResponse.ok()).toBeTruthy();
                const logInResponseJson = await logInResponse.json();
                const token = logInResponseJson.token;
                console.log(token)
                return token;
        }

        async createOrder(orderPayload) {
                let response = {};
                response.token = await this.getToken();
                const orderResponse = await this.apiContext.post('https://www.rahulshettyacademy.com/api/ecom/order/create-order',
                        {
                                data: orderPayload,
                                headers: {
                                        'Authorization': response.token,
                                        'Content-Type': 'application/json'
                                },
                        })
                const orderResponseJson = await orderResponse.json();
                console.log(orderResponseJson)
                const orderID = orderResponseJson.orders[0];
                console.log(orderID)
                response.orderID = orderID;

                return response;
        }
}
module.exports = {APIUtils}; 