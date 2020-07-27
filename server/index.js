const express = require('express')
const getProducts = require('./getProducts')

const app = express()

const port = 4000

app.get('/api/products', getProducts)

app.get(`/api/product/:id`, getProducts)

app.listen(port, () => {
    console.log(`Server listing on port: ${port}`)
})