exports.createProduct = (req, res, next) => {
  console.log("request: ", req.body);
  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      name: "Sari Gandum",
      price: 8000,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Success",
    data: [
      {
        id: 1,
        name: "Sari Gandum",
        price: 8000,
      },
    ],
  });
  next();
};
