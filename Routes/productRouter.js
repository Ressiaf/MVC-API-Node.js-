const product = require('../controllers/productController.js')
const express = require ('express')
const router = express.Router( );

router
    .get("/products/prices" , product.ProductsByPrices)
    .get("/products/expensive" ,product.ProductsExpensive)
    .get("/products",product.ProductsController)
    .get("/products/:id" ,product.ProductsByIDController)
    .get("/products/categories/:category" ,product.ProductsByCategoriesController)
    module.exports = router ;

