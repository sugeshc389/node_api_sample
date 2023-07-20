const express = require('express');
var bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



const port = 3000;

const products = [
    {
        name: 'shirts',
        brand: 'allen solly',
    },
    {

        name: 'pants',
        brand: 'LP'

    }

]

app.get('/', (req, res) => {

    res.json(products);

})

app.get('/products/:id', (req, res) => {
    res.json(products[parseInt(req.params.id) - 1])
             
})

app.post('/products', (req, res) => {
    console.log(req.body);
    res.json({ message: 'ok' })
})

app.listen(port, () => {
    console.log(`Server Running on Port :${port}`);
})