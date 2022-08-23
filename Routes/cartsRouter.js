const carts = require('../controllers/cartsController.js')
const express = require ('express')
const router = express.Router();

router
    .get("/carts", carts.getCartsController)
    .get("/carts/bigCarts" , carts.getBigCartsController)
    .get("/carts/:id" ,  carts.getCartsByIDController)
    module.exports =router ;