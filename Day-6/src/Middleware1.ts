const joi = require("joi");
import { Response,Request,NextFunction } from "express";
const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required(),
   password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
const validator1 = (req:Request, res:Response, next:NextFunction) => {
  const { value, error } = userSchema.validate(req.body);
  if (error) {
    res.status(300).send({ error: error.details[0].message });
  } else {
    res.send(value);
  }
  next();
  
};
module.exports = validator1;
