const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT =  3000;
const userRoutes=require("./routes/postsRoutes")
const authRouter=require("./routes/authenticationRoute")
const logRequestDetails=require('./middleware/logRequestDetails')
const { errorHandler } = require('./middleware/errorHandler')
const {customHeaderMiddleware}=require('./middleware/customHeaderMiddleware')
const {rateLimitMiddleware}= require('./middleware/rateLimitMiddleware')


// Middleware to parse JSON requests
app.use(express.json());

app.use(logRequestDetails)
app.use(customHeaderMiddleware)
app.use('/users',userRoutes)
app.use("/auth",authRouter)
app.get('/custom',rateLimitMiddleware,(req,res,next)=>{
  res.send("hello world");
})

app.get('*',(req,res,next)=>{
  try {
    throw new Error('Something went wrong! fix it');
 } catch (err) {
   next(err); 
 }
})
app.get('/error', (req, res, next) => {
  try {
     throw new Error('Something went wrong!');
  } catch (err) {
    next(err); 
  }
});


app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});