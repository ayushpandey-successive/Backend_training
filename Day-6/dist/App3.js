"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const validationMiddleware = require("./Validation_Middleware");
const app = express();
app.use(bodyparser.json());
app.use(validationMiddleware);
app.post("/", (req, res) => {
    res.send("everything up to date");
    console.log(res);
});
app.listen("8000");
