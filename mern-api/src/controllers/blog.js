const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
    // console.log("err : ", errors);
    // res.status(400).json({
    //   message: "Request Error",
    //   data: null,
    // });
  }
  if (!req.file) {
    const err = new Error("Image harus di-upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: { uid: 1, name: "Leja Aprianza" },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Post",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
exports.updateBlogPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Invalid Value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
    // console.log("err : ", errors);
    // res.status(400).json({
    //   message: "Request Error",
    //   data: null,
    // });
  }
  if (!req.file) {
    const err = new Error("Image harus di-upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Blog post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }
      post.title = title;
      post.body = body;
      post.image = image;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "update sukses",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllBlogPost = (req, res, next) => {
  BlogPost.find()
    .then((result) => {
      res.status(200).json({
        message: "Data Blog Post Berhasil dipanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBlogPostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId).then((result) => {
    if (!result) {
      const error = new Error("Blog post tidak ditemukan");
      error.errorStatus = 404;
      throw error;
    }
    res
      .status(200)
      .json({
        message: "Data berhasil ditemukan",
        data: result,
      })
      .catch((err) => {
        next(err);
      });
  });
};
