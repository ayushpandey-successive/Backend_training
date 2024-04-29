const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT =  3000;
const postRoutes=require("./routes/postsRoutes")

// Middleware to parse JSON requests
app.use(express.json());
app.use('/posts',postRoutes)


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});