const express = require('express')

const app = express();
const router= express.Router();

router.use('/router', (req,res,next)=>{
    console.log('url: ', req.originalUrl);
    console.log('request: ', req.method);
})

app.use('/', router);
// 21.20 - Membuat dan Memahami Basic Router, Request dan Response di NodeJS menit 3.39

app.listen(4000);
