"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data = require('./mockdata');
const app = express();
app.get("/", (req, res) => {
    res.send(JSON.stringify(data));
});
app.listen(4000, () => {
    console.log("listening to port 4000");
});
