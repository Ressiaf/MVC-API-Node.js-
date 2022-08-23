function date (req, _res , next) {
    req.date = new Date().toLocaleString();
    console.log(req.date)
    next()
}

module.exports = date
