const express = require('express');
const router = express.Router();
const {
    getAllBlogs,
    createBlog,
    updateBlog,
    partialUpdateBlog,
    deleteBlog
} = require('../controllers/blogController');

// Routes for blogs
router.get('/', getAllBlogs);  // Get all blogs
router.post('/', createBlog);  // Create a new blog
router.put('/:id', updateBlog);  // Update a blog by ID
router.patch('/:id', partialUpdateBlog);  // Partially update a blog by ID
router.delete('/:id', deleteBlog);  // Delete a blog by ID

module.exports = router;
