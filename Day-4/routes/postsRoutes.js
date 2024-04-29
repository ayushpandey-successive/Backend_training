const express = require('express');

let Router = express.Router()
const {createPost,getPost,manuallyAddPost}=require("../controllers/postControllers")


// Route to get all posts
Router.get('/generator',createPost );
Router.get('',getPost)

// Route to add a new post (simulated)
Router.post('/add',manuallyAddPost);

module.exports = Router