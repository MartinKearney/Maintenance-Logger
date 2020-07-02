const express = require('express');
const connectDB = require('./db_config/db');
const path = require('path');

const app = express();

// Connect to database
connectDB();

// Initialise middleware
app.use(express.json({ extended: false }));

// Define API endpoints
app.use('/', require('./routes'));
// // Employee endpoints
// app.use('/employees', require('./routes/employees/index'));
// app.use('/employee/create', require('./routes/employees/create'));
// app.use('/employee/delete', require('./routes/employees/delete'));

// // Job endpoints
// app.use('/jobs/', require('./routes/jobs/index'));
// app.use('/job/create', require('./routes/jobs/create'));
// app.use('/job/update', require('./routes/jobs/update'));
// app.use('/job/delete', require('./routes/jobs/delete'));

// Serve static assets in production i.e. React
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  // Set catch all route
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// The envirnoment variable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
