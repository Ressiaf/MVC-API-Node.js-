const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getCarts = async ( ) => {
    try {
        const resp = await fetch("https://fakestoreapi.com/carts")
        const data = resp.json()
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getCartsByID = async ( id ) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/carts/${id}`)
        const data = resp.json()
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};




let cartsModel = {
    getCarts,
    getCartsByID
};

module.exports =cartsModel;
