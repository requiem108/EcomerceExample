const express = require('express')
const data = require('./data.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedRouter = require('./routes/seeRoutes.js');
const productRouter = require('./routes/productRoutes.js');

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

const app = express()
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)

const port = process.env.PORT || 5000

/*
app.get('/api/products', (req,res)=>{
    res.send(data.products)
})*/



app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})