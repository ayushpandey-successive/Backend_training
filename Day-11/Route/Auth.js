const express = require("express");
const router = express.Router();
const verify = require("../Middleware/security");
const isAdmin=require('../Middleware/isAdmin')
const isUser=require('../Middleware/isUser')
const {protected, userroute}=require('../controller/controller')

router.get("/getuser", verify,isAdmin, protected);
router.get("/user",verify,isUser,userroute)
module.exports = router;