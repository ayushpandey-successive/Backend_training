const express = require("express");
const bodyparser = require("body-parser");
import { Request,Response } from "express";
const validationMiddleware = require("./Validation_Middleware");
const app = express();

app.use(bodyparser.json());
app.use(validationMiddleware);

app.post("/", (req:Request, res:Response) => {
  res.send("everything up to date");
  console.log(res);
});
app.listen("8000");
