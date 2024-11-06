const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const translateRoutes = require('./routes/translateRoutes'); // Import translate routes

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', blogRoutes);
app.use('/api', translateRoutes); // Register translate routes here

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
