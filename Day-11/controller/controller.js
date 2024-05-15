const loginservice = require("../service/loginservice");
const signupservice = require("../service/signupservice");
const collection = require("../schema");

const signup = async (req, res) => {
  try {
    await signupservice(req, res);
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    console.log("you reached to signup");
    await loginservice(req, res);
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).send("Internal server error");
  }
};
const protected = async (req, res) => {
  const data = await collection.find();
  res.send(data);
};
const userroute=async(req,res)=>{
  res.send('You are user so have access to this route')
}

module.exports = { signup, login, protected,userroute};