const express = require('express')

const app = express();

app.use(()=>{
    console.log('hello server...')
    console.log('hello lagi...')
    console.log('hello tiga...')
})

// 20.19

app.listen(4000);
