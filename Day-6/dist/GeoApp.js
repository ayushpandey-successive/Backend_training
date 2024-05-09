"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const locationMiddleware = require("./Geographic_Middleware");
const app = express();
app.use(locationMiddleware);
app.get("/", (req, res) => {
    res.send("Ok now you are allowed to work as your IP address is validated");
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
