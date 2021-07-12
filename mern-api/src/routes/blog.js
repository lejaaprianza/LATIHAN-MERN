const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const blogController = require("../controllers/blog");

router.post(
  "/post",
  [body("title").isLength({ min: 5 }), body("body").isLength({ min: 5 })],
  blogController.createBlogPost
);
module.exports = router;
