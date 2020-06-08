const express = require('express');

const app = express();

// The envirnoment variable will be used in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
