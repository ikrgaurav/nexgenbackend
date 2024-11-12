const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const blogRoutes = require('./routes/blogRoutes');
const translateRoutes = require('./routes/translateRoutes');

dotenv.config();
const app = express();

// Use CORS middleware to allow requests from any origin
app.use(cors({
  origin: '*',  // This allows all origins to access the API
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],  // Allow common HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow the necessary headers
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/blogs', blogRoutes);          // All blog routes will be under '/api/blogs'
app.use('/api/translate', translateRoutes);  // All translate routes will be under '/api/translate'

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
