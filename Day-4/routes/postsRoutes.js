const express = require('express');

let Router = express.Router()
const {createUser,getUser,protectedroute}=require("../controllers/postControllers")
const authenticateJWT=require("../middleware/authmiddleware")


// Route to get all posts
Router.get('/generator',createUser );
Router.get('',getUser)
Router.get('/protected-route',authenticateJWT,protectedroute);



module.exports = Router