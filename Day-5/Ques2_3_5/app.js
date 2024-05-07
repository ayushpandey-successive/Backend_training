const express = require('express');
const createError = require('./Middlewares/http-error');
const Errorhandler=require('./Middlewares/errorhandler')

const app = express();

app.use(createError);
app.get('/',(req,res)=>{
    res.send('I am available')
})
app.get('/about',(req,res)=>{
    res.send('I am about')
})
app.get('/user',(req,res)=>{
    res.send('I am user')
})
app.get('/contact',(req,res)=>{
    res.send('I am contact')
})
app.use(Errorhandler)

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})