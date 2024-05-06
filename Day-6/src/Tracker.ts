//9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.
import { Response,Request,NextFunction } from "express";
const tracker=(req:Request,res:Response,next:NextFunction)=>{
const timestamp=new Date().toISOString();
console.log(`${timestamp} ${req.method} ${req.url}`)
next();
}
module.exports=tracker;