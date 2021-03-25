
const express = require('express')
const router= express.Router();
const productsController = require('../controllers/products')

//CREATE POST
router.post('/product', productsController.createProduct)

// E:\kuliah\javascript\react\prawito-hudoro\MERN Tutorial 22.21 - Restructure Projects NodeJS_ExpressJS 6.05


//Read -> GET
router.get('/products', productsController.getAllProducts)


module.exports = router;
