require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler');

const userRoute = require('../routes/user.route');
const registerRoute = require('../routes/register.route');
const productsRoute = require('../routes/product.route');
const salesRoute = require('../routes/sale.route');
const salesProductsRoute = require('../routes/sale-product.route');

const sellerSalesRoute = require('../routes/seller-sale.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../../public/images')));

app.get('/coffee', (_req, res) => res.status(418).end());

// customers routes
app.use('/login', userRoute);
app.use('/register', registerRoute);
app.use('/customer/products', productsRoute);
app.use('/customer/orders', salesRoute);
app.use('/customer/sales-products', salesProductsRoute);

// seller routes
app.use('/seller/orders', sellerSalesRoute);

app.use(errorHandler);

module.exports = app;
