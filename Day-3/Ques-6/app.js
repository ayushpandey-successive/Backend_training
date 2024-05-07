const express = require("express");
const locationMiddleware = require("./geographic_middleware");
const app = express();
app.use(locationMiddleware);
app.get("/", (req, res) => {
  res.send("Ok now you are allowed to work as your IP address is validated");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});