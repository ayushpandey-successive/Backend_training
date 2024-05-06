const express = require('express');

let authRouter = express.Router()

const {generateToken} =require('../controllers/authentication')

authRouter.post('/login',generateToken)


module.exports= authRouter