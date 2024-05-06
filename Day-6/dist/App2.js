"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const validator1 = require("./validator1");
const app = express();
app.use(validator1);
app.post("/signup", (req, resp) => {
    console.log("posted data on signup page");
});
app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
