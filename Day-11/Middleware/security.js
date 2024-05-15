const jwt = require("jsonwebtoken");
const express = require("express");
const user = require("../schema");
const app = express();

const verify = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token missing" });
  }
  try {
    const decoded = await jwt.verify(token, "secret-key");
    const name = decoded.username;
    console.log(name);
    const details = await user.find({ username: name });
    console.log(details);
    console.log(`i am ${details[0].roles}`);
    req.roles = details[0].roles;
    console.log(req.roles);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
module.exports = verify;