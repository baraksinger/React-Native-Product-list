const productsDB = require('../data/dataProvider');

const getProducts = (req, res) => {
    let page = req.query.page;
    let top = productsDB.slice(page * 10, page * 10 + 10);
    res.json(top);
}

module.exports = {
    getProducts: getProducts
}