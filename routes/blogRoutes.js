const express = require('express');
const { getAllBlogs, createBlog, updateBlog, partialUpdateBlog, deleteBlog } = require('../controllers/blogController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, getAllBlogs);                // GET /api/blogs
router.post('/', authenticateToken, createBlog);                // POST /api/blogs
router.put('/:id', authenticateToken, updateBlog);              // PUT /api/blogs/:id
router.patch('/:id', authenticateToken, partialUpdateBlog);     // PATCH /api/blogs/:id
router.delete('/:id', authenticateToken, deleteBlog);           // DELETE /api/blogs/:id

module.exports = router;
