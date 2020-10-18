const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');

require('dotenv/config');
app.use(bodyParse.json())
app.use(cors());
// import routes

const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categoryRouter');
app.use('/product', productRouter)
app.use('/category', categoryRouter);

// connection to the DB
const mongoDB = process.env.DB_CONNECTION;
mongoose.connect(mongoDB, { useNewUrlParser: true }, () => console.log('connecte to DB!'));

// How do we start listening to the server
app.listen(3000)