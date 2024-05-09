const express = require("express");
import { Response,Request } from "express";
const locationMiddleware = require("./Geographic_Middleware");
const app = express();
app.use(locationMiddleware);
app.get("/", (req:Request, res:Response) => {
  res.send("Ok now you are allowed to work as your IP address is validated");
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
