const express = require('express')

const app = express();

app.use(()=>{
    console.log('hello server...')
})

// 19.18 menit ke 5.06

app.listen(4000);
