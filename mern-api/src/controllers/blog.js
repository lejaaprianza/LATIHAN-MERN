exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  const body = req.body.body;
  const result = {
    message: "Create Blog Post",
    data: {
      post_id: 1,
      title: title,
      image: "imagefile.png",
      body: "Ini konten",
      created_at: "12/06/2020",
      author: {
        uid: 1,
        name: "Testing",
      },
    },
  };
  res.status(201).json(result);
};
