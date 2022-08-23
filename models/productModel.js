const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const  getProducts = async ( ) => {
    try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = resp.json()
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getProductsByID = async ( id ) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = resp.json( )
        return data ;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getProductsCategories = async () => {
    try {
        const resp = await fetch("https://fakestoreapi.com/products/categories");
        const data = resp.json();
        return data;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const getProductsByCategory = async (category) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = resp.json();
        return data;
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

let productModel = {
    getProducts,
    getProductsByID,
    getProductsCategories,
    getProductsByCategory,
};


module.exports =productModel;
