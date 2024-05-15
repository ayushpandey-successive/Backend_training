const collection = require("../schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginservice = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await collection.findOne({ username: username });
    if (!user) {
      return res
        .status(404)
        .send("User not found. Please enter a valid username.");
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign(
          { username: user.username,email:user.email, password: user.password},
          "secret-key",
          { expiresIn: "1h" }
        );
        console.log(token);
        res.cookie("jwt", token, { expiresIn: "1h" });
        res.send("token is stored in the cookie");
      } else {
        return res
          .status(401)
          .send("Invalid password. Please enter the correct password.");
      }
    }
  } catch (error) {
    console.error("Error in login service:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = loginservice;