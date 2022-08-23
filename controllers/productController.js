const product = require("../models/productModel.js");

const ProductsController = async (_req, res) => {
    try {
        const result = await product.getProducts();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const ProductsByIDController = async (req, res) => {
    try {
        let { id } = req.params;
        const result = await product.getProductsByID(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const ProductsByCategoriesController = async (req, res) => {
    try {
        const { category } = req.params;
        const categories = await product.getProductsCategories();
        const categoryArr = categories.filter( (categories) => categories === category );
        const productsArr = await product.getProductsByCategory(category);
        Promise.all([categoryArr, productsArr]).then((result) => {
        res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

const ProductsByPrices = async (req, res) => {
    const { order } = req.query
    try {
        const products =  await product.getProducts( );
        const result = products.map( (product) => {
            return {
                id: product.id,
                price: product.price,
                title: product.title,
            }
        } ).sort( (a, b) => a.price - b.price );
        if (order == 'desc') result.reverse(); 
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404);
    } 
};

const ProductsExpensive = async (_req, res) => {
    try {
        /*  categories espera un array de objetos con 4 categorias */
        const categories = await product.getProductsCategories()
         /* ["electronics","jewelery","men's clothing","women's clothing"] */
        const result = [ ];
        /*  se hace un map de las 4 categorias , */
        categories.map(async (category) => {
            /* por cada categegoria :*/ 
            /*  instanciamos precios por un array vacio*/
            const prices = [ ];
            /*  data espera un array que traer todos los productos de la categoria asignada por parametro*/
            const data = await product.getProductsByCategory(category);
            /*  se hace un mapeo de data y por cada objeto se pushean los valores*/
            data.map( item => prices.push( parseFloat(item.price) ) );
            /* pricemax guarda los valores maximos de prices */ 
            const priceMax = Math.max( ... prices )
            /* mi reducer hace un filtro retorna los items que igual su valor con el del precio maximo */ 
            const reducer =  data.find( item =>{ return item.price === priceMax} )
            /* hago el push de mi reducer para enviarlo */ 
            result.push(  reducer )
            /* mi console log me muestra los objetos que quiero enviar
            pero va cargandolos de uno a uno hasta completar los 4  (1 x categoria) */ 
            console.log('result : ', result);
        } )
        /*me retorna un array vacio , por que en el momento que se hace el send.result , result esta vacio  */ 
        /* no puedo hacer el return dentro del map  */  

         /* perdon por esta respuesta tan atada con alambre , prometo mejorar   */ 
        setTimeout(function(){
            res.status(200).send(result)
        }, 2000);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
};

let productController = {
    ProductsController,
    ProductsByIDController,
    ProductsByCategoriesController,
    ProductsByPrices,
    ProductsExpensive,
};

module.exports = productController;
