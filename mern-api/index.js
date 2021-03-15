const express = require('express')

const app = express();
const router= express.Router();

router.use('/products', (req,res,next)=>{
    res.json({name: "Leja Aprianza",email: "lejaprianza@gmail.com"})
    next()
})

router.use('/price', (req,res,next)=>{
    res.json({price: 4000000})
    next()
})

router.use('/customers', (req,res,next)=>{
    res.json({title: "Customer"})
    next()
})

app.use('/', router);
// 22.21 - Restructure Projects NodeJS_ExpressJS

app.listen(4000);
