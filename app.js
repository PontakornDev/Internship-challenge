const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));


const PORT = process.env.PORT || 3001;
const product = require('./data/products.json')

app.get('/', (req, res) => {
    res.send('hello test');
})

app.get('/product', (req, res) => {
    res.render('productView.ejs', { product: product.data });
})

app.get('/productAdd/:id', (req, res) => {
    const productAdd = product.data.find(item => item.id == req.params.id)
    res.render('productAdd.ejs',{product: productAdd});
});

app.listen(PORT, () => console.log(`Server Listen PORT ${PORT}`));