const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { name, image, text, category } = req.body;
    const blog = new Blog({ name, image, text, category });
    await blog.save();
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
