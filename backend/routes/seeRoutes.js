/*import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';*/

const express = require('express')
const Product = require('../models/productModel.js')
const data = require('../data.js');

const seedRouter = express.Router();

module.exports = seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
