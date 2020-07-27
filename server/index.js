const express = require('express')
const products = require('../products.json')

const app = express()

const port = 4000

app.get('/api/products', (req, res) => {
    res.status(200).send(products)
})

app.listen(port, () => {
    console.log(`Server listing on port: ${port}`)
})