
const express = require('express')
const router= express.Router();

router.use('/products', (req,res,next)=>{
    res.json({name: "Leja Aprianza",email: "lejaprianza@gmail.com"})
    next()
})

module.exports = router;
