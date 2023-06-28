
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Login = require('./Rest/Login');
const Signup = require('./Rest/Signup');
const NavigationBar = require('./Rest/NavigationBar');
const Home = require('./Rest/Home');
const Product = require('./Rest/Product');
const ProductDetails = require('./Rest/ProductDetails');
const Cart = require('./Rest/Cart');
const OrderTracking = require('./Rest/OrderTracking');
const Profile = require('./Rest/Profile');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit:'20mb', extended: false }));

Login(app);

Signup(app);

NavigationBar(app);

Home(app);

Product(app);

ProductDetails(app);

Cart(app);

OrderTracking(app);

Profile(app);

app.get("/*", (req, res) => {
  res.status(404).json({status: "not found"})
})

app.post("/*", (req, res) => {
  res.status(404).json({status: "not found"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;