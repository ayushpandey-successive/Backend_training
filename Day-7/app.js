const express = require('express');
const HealthCheck = require('./healthCheck');

const app = express();
const port = 4000;

// Initialize health check route
const healthCheck = new HealthCheck();
app.use('/', healthCheck.router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});