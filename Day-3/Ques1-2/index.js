const express = require("express");
const Schema =require("./validation.js")
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post("/user", (req, res, next) => {
    console.log(req.body)
    const { error, value } =Schema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
          return res.send("Invalid Request: " + JSON.stringify(error));
      } else {
          return res.send("Successfuly inside user: " + JSON.stringify(value));
      }
    
  });

app.listen(3000, () => {
  console.log("This server port is 3000!!");
});