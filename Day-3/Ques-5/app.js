const express = require("express");
const NumericMiddleware = require("./numericMiddleware");
const app = express();
app.use(NumericMiddleware);

app.get("/", (req, res) => {
  res.send("You have now searched in proper manner");
});
app.listen("3000", () => {
    console.log("This server port is 3000!!")});