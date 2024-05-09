const express = require("express")
const data= require("./mockData")

const app=express();


app.get("/",(req,res)=>{
    res.send(JSON.stringify(data))
})


app.listen(4000,()=>{
    console.log("listening to port 4000")
})