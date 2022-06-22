const express = require('express'),
productController = require("../controllers/productController"),

productRouter = express.Router();

productRouter.get('/', productController.getProduct);

module.exports = productRouter;