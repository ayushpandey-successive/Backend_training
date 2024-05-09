const express = require("express")
const data = require('./mockdata')
import { Request,Response } from "express";

const app=express();


app.get("/",(req:Request,res:Response)=>{
    res.send(JSON.stringify(data))
})


app.listen(4000,()=>{
    console.log("listening to port 4000")
})