const productsDB = require('../db/dataProvider');

const getProducts = (req, res) => {
    let page = req.query.page;
    console.log('page', page);
    let top = productsDB.slice(page*10, page*10+10);
    console.log(top);
    res.json(top);
}

module.exports = {
    getProducts: getProducts
}