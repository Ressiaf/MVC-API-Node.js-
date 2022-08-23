Primer Entregable Skill Factory , Node 2 
Ressia Facundo  - 35562324

Consigna:
1- Crear un proyecto e instalar los módulos correspondientes, crear las carpetas correspondientes para modelos, controladores y middlewares ✅ 
2- Crear un archivo app.js que levante el proyecto en localhost:3000, y utilice un Express.router ✅
3- Usando la API proporcionada generar modelos para Producto, Carrito y Usuario ✅ 
4- Crear un middleware para imprimir por consola la fecha en la que se hace cada request ✅
5 - Crear un middleware que maneje los errores 404  ✅ 
6- Crear los endpoints que se piden en la siguiente diapositiva y que cumplan sus funcionalidades: (✅ ? ) 

a) Todos los endpoints básicos de la API de Fakestore se deben poder acceder a través de nuestra API, ej: /products, /products/:id, y sus análogos para Categorías, carritos y usuarios 
b) GET /products/categories debe devolver un array de objetos que tenga el nombre de la categoria y un array con todos los productos pertenecientes a la categoria 
c) GET /users/firsts debe devolver los primeros 3 usuarios ordenados por ID 
d) GET /prices debe devolver una lista de productos que tengan id, titulo y precio de cada producto y que se pueda ordenar por precio y se pueda elegir si en orden ascendiente o descendiente a traves de un query “order” 
e) GET /expensive debe devolver todos los productos que sean los más caros de su categoria
f) GET /bigcarts debe devolver todos los carritos que tengan más de 2 productos y que diga el nombre del usuario que ordeno ese carrito 




