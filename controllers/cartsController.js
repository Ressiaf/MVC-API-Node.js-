const carts = require('../models/cartsModel.js')
const users = require('../models/usersModel.js')

const getCartsController = async (_req, res) => {
    try {
        let result = await carts.getCarts();
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}
const getCartsByIDController = async (req, res) => {
    try {
        const { id } = req.params
        let result = await carts.getCartsByID(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


const getBigCartsController = async (_req, res) => {
    try {
        const cart = await carts.getCarts();
        const user = await users.getUsers();
        const result = cart.filter( (cart) => cart.products.length > 2 )
        result.forEach(cart => { 
        const reducer = user.find( user => user.id === cart.userId )
        cart.username = reducer.username
        });
        res.status(200).json( result )
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

let cartsController = {
    getCartsController,
    getBigCartsController, 
    getCartsByIDController
}

module.exports = cartsController;