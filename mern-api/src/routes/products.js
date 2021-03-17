
const express = require('express')
const router= express.Router();
const productsController = require('../controllers/products')

router.post('/product', productsController.createProduct)

// E:\kuliah\javascript\react\prawito-hudoro\MERN Tutorial 22.21 - Restructure Projects NodeJS_ExpressJS 6.05

router.get('/products', (req,res,next)=>{
    res.json({name: "Leja Aprianza",email: "lejaprianza@gmail.com"})
    next()
})
router.put('/products', (req,res,next)=>{
    res.json({name: "Leja Aprianza",email: "lejaprianza@gmail.com"})
    next()
})
router.delete('/products', (req,res,next)=>{
    res.json({name: "Leja Aprianza",email: "lejaprianza@gmail.com"})
    next()
})

module.exports = router;
