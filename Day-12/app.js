const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet());


app.get('/', (req, res) => {
    res.send("Hi I am secure ");
});

app.listen(8000,()=>{
    console.log("server listen to port 8000")
});