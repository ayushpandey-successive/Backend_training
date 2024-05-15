const express = require("express");
const router = express.Router();
const { login, signup, protected } = require("../controller/controller");
const verify = require("../Middleware/security");

router.post('/login', login);

router.post('/signup', signup);

module.exports = router;