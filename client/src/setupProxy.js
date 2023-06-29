const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    let listEndpoint = [
        "/login/auth",
        "/signup/auth",
        "/navigation/cart",
        "/navigation/wish-list",
        "/navigation/profile/:username",
        "/home/list-type",
        "/home/list-item",
        "/home/list-review",
        "/product/list",
        "/product/type",
        "/aboutus/all"
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

