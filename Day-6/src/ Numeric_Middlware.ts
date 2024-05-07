//5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided,
// respond with an appropriate error message.

import { Request,Response,NextFunction } from "express";
const Numeric_Middleware = (req:Request, res:Response, next:NextFunction) => {
  const age = req.query.age as string;
  if (isNaN(Number(age))) {
    res.status(400).send("Please enter a numeric value for age");
  } else {
    next();
  }
};

module.exports = Numeric_Middleware;
