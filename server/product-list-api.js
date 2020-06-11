const express = require('express');
const port = process.env.PORT || 3000
const cors = require('cors');

const products = require('./controllers/products');

const app = express();
app.use(cors());

app.get('/products', (req, res) => products.getProducts(req, res));


app.listen(port, () => {
    console.log(`App is  listening on port ${port}`)
});