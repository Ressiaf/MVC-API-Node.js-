const notFound = ( err, res ) => {
    console.error(`url:${err.url} - method:${err.method} - status:${err.statusMessage}` );
    console.error('404 - Not found')
    res.status(404).send( { error: '404 - Not found' } );

}

let errorHandler = {
    notFound,
}

module.exports = errorHandler;


