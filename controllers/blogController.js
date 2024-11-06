const Blog = require('../models/Blog');

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const { name, image, text, category } = req.body;
        const newBlog = new Blog({ name, image, text, category });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Partially update a blog by ID (PATCH)
const partialUpdateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getAllBlogs, createBlog, updateBlog, partialUpdateBlog, deleteBlog };
