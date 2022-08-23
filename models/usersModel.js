const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getUsers = async () => {
    try {
        const resp = await fetch("https://fakestoreapi.com/users")
        const data = resp.json()
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getUsersByID = async ( id ) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/users/${id}`)
        const data = resp.json()
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getLimitUsers = async ( limit ) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/users?limit=${limit}`)
        const data = resp.json()
        return data 
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

let usersModel = {
    getUsers,
    getUsersByID,
    getLimitUsers,
};

module.exports = usersModel;
