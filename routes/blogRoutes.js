const express = require('express');
const { getAllBlogs, createBlog, updateBlog, partialUpdateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getAllBlogs);                // GET /api/blogs
router.post('/', createBlog);                // POST /api/blogs
router.put('/:id', updateBlog);              // PUT /api/blogs/:id
router.patch('/:id', partialUpdateBlog);     // PATCH /api/blogs/:id
router.delete('/:id', deleteBlog);           // DELETE /api/blogs/:id

module.exports = router;
