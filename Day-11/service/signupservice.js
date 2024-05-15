const collection = require("../schema");
const bcrypt = require("bcryptjs");

const signupservice = async (req, res) => {
  const username= req.body.username;
  const email=req.body.email;
  let password = req.body.password;
  const roles=req.body.roles;
  try {
    const matcheduser = await collection.findOne({ username: username });
    if (!matcheduser) {
      const hashedpassword = await bcrypt.hash(password, 10);

      console.log(hashedpassword);
      const newUser = await collection.create({
        username: username,
        email:email,
        password: hashedpassword,
        roles:roles
      });
      res.send(hashedpassword);
      //here we 
    } else {
      res.send("Username is already present ");
    }
  } catch (err) {
    res.status(201).send(`Error in signup is:${err}`);
  }
};
module.exports = signupservice;