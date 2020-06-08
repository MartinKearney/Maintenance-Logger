const express = require('express');
const connectDB = require('./db_config/db');
const path = require('path');

const app = express();

// Connect to database
connectDB();

// The envirnoment variable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
