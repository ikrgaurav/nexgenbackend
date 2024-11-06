const express = require('express');
const { translateText } = require('../controllers/translateController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

// Apply authentication middleware
router.post('/translate', authenticateToken, translateText);

module.exports = router;
