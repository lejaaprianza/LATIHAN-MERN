const express = require("express");
const app = express();
const productsRoutes = require("./src/routes/products");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/v1/", productsRoutes);

app.listen(4000);

//tes penanganan error CORS
// const getButton = document.getElementById("get")
// const postButton = document.getElementById("post")

// getButton.addEventListener("click",()=>{
// 	fetch("http://localhost:4000/v1/products")
// 	.then(res=>res.json())
// 	.then(resJSON=>console.log(resJSON))
// 	.catch(err=>console.log(err));
// })

// postButton.addEventListener("click",()=>{
// 	fetch("http://localhost:4000/v1/product",{method:'POST'})
// 	.then(res=>res.json())
// 	.then(resJSON=>console.log(resJSON))
// 	.catch(err=>console.log(err));
// })
