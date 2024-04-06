const express = require('express');
const Product = require('../models/product.model.js');
const {getProducts,getProduct,createProducts,updateProduct,deleteProduct} = require('../controllers/product.controller.js');
const router  = express.Router();

//get Products
router.get('/',getProducts);

// Get Product
router.get('/:id',getProduct);

// Post Products
router.post('/',createProducts);

// Update Product
router.put('/:id',updateProduct);

// Dlete Product
router.delete('/:id',deleteProduct);

module.exports =router;