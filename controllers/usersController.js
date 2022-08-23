const usersModel = require('../models/usersModel.js');

const UsersController = async (_req ,res) => {
    try {
        const result = await usersModel.getUsers();
        res.status(200).json(result);
    }  catch (error) {
        console.log(error)
        res.status(404)
    }
}

const UsersByIDController = async (req, res) =>{
    try {
        const { id } = req.params
        const result = await usersModel.getUsersByID( id );
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

const UserLimitController = async (_req, res) =>{
    try {
        const limit = 3
        const result = await usersModel.getLimitUsers( limit );
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


let usersController = {
    UsersController,
    UserLimitController,
    UsersByIDController
}

module.exports = usersController;