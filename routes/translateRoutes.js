const express = require('express');
const { translateText } = require('../controllers/translateController');
const router = express.Router();

// Define the translation route
router.post('/translate', translateText);

module.exports = router;
