import { Response,Request,NextFunction } from "express";
interface valid{
    username:string;
    email:string;
    password:string;
}

const validationMiddleware = (req:Request, res:Response ,next:NextFunction) => {
    const { username, email, password}:valid = req.body 
    if (!username || !email || !password) {
      return res.status(400).send({ error: "All details are required" });
    }
    const usernameFormat = /^[a-zA-Z0-9_]{4,}$/;
    if (!usernameFormat.test(username)) {
      return res.status(400).send({
        error:
          "Username must be at least 4 characters long and can only contain letters, numbers, or underscores",
      });
    }
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
      return res.status(400).send({ error: "Invalid email format" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .send({ error: "Password must be at least 6 characters long" });
    }
  
    next();
  };
  
  module.exports = validationMiddleware;
  