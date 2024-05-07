const express = require("express");
const NumericMiddleware = require("./ Numeric_Middlware");
import { Request,Response } from "express";
const app = express();
app.use(NumericMiddleware);

app.get("/", (req:Request, res:Response) => {
  res.send("You have now searched in proper manner");
});
app.listen("6000");
