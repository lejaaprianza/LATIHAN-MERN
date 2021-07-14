const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
// const productsRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");
const path = require("path");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const db =
  "mongodb://akatsuki:zuQYbzSxekFor0vi@cluster0-shard-00-00.1hwyz.mongodb.net:27017,cluster0-shard-00-01.1hwyz.mongodb.net:27017,cluster0-shard-00-02.1hwyz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-5cr3qk-shard-0&authSource=admin&retryWrites=true&w=majority";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/v1/customer", productsRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// try {
// Connect to the MongoDB cluster
//   mongoose.connect(
//     db,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log(" Mongoose is connected")
//   );
// } catch (e) {
//   console.log("could not connect");
// }
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    app.listen(4000, () => console.log("Connection success"));
  })
  .catch((err) => console.log(err));

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
