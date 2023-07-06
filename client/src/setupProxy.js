const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    let listEndpoint = [
        "/login/auth",
        "/signup/auth",
        "/navigation/cart",
        "/navigation/wish-list",
        "/navigation/search",
        "/navigation/profile/:userid",
        "/home/list-type",
        "/home/list-item",
        "/home/list-review",
        "/product/list",
        "/product/type",
        "/product-detail/:productid",
        "/product-detail/:productid/addtocart",
        "/product-detail/:productid/submit-review",
        "/product-detail/:productid/addwishlist",
        "/cart/check-out",
        "/cart/set-quantity",
        "/cart/remove-all",
        "/profile/:userid",
        "/order-tracking/review/add",
        "/order-tracking/view/state",
        "/order-tracking",
        "/order-tracking/:orderid",
        "/profile/method/:userid",
        "/profile/orders/:userid",
        "/profile/:userid/update",
        "/profile/:userid/password-change",
        "/profile/:userid/add-method",
        "/method/view",
        "/aboutus/all",
        "/show/user/type",
        "/create/product",
        "/change/orderstate",
        "/show/order"
    ];
    
    listEndpoint.forEach(endpoint => {
        app.use(
            endpoint,
            createProxyMiddleware({
                target: 'http://localhost:3001', // Replace with your backend server URL
                changeOrigin: true,
            })
        );        
    })

};

