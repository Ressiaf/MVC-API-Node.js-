const users = require('../controllers/usersController.js')
const express = require ('express')
const router = express.Router();

router
    .get("/users", users.UsersController)
    .get("/users/firsts" , users.UserLimitController)
    .get("/users/:id",  users.UsersByIDController)
    module.exports = router ;