const errorHandler = require('./middlewares/errorHandler.js');
const productRouter = require('./Routes/productRouter.js')
const cartsRouter = require('./Routes/cartsRouter.js')
const userRouter = require('./Routes/usersRouter.js')
const date =require('./middlewares/dates.js')
const express = require( 'express' );
const app = express( );
const port = 3000;

app
    .use(express.json())
    .use("/api/", date , productRouter , userRouter , cartsRouter , errorHandler.notFound   )
    .listen(port , ( ) => { console.log(`example app listening on port ${port}`) } )