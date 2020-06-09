const express = require('express');
const connectDB = require('./db_config/db');
const path = require('path');

const app = express();

// Connect to database
connectDB();

// Initialise middleware
// allows us to accept json data into the API
app.use(express.json({ extended: false }));

// Define API endpoints
// Employee endpoints
app.use('/employees', require('./routes/employee/index'));
app.use('/employee/create', require('./routes/employee/create'));
app.use('/employee/delete', require('./routes/employee/delete'));

// Job endpoints

// The envirnoment variable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
