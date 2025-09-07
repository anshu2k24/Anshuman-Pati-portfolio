const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const portfolioRoutes = require('./routes/PortfolioRoute'); 

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
app.use(cors());

// MongoDB Connection
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB database connection established successfully! ✅'))
    .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/anshu/api', portfolioRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} 🔥`);
});