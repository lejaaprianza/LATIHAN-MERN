const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("body tidak sesuai"),
  ],
  blogController.createBlogPost
);
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("body tidak sesuai"),
  ],
  blogController.updateBlogPost
);
router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);

module.exports = router;
