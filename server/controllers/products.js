const productsDB = require('../data/dataProvider');

const getProducts = (req, res) => {
    let page = req.query.page;
    let searchText = req.query.searchText.toLowerCase();
    let filteredResults = productsDB.filter(product => product.name.toLowerCase().indexOf(searchText) > -1)
    let nextBulk = filteredResults.slice(page * 10, page * 10 + 10);
    res.json(nextBulk);
}

module.exports = {
    getProducts: getProducts
}