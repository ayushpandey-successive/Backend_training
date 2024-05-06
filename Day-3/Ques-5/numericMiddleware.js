//5.Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided,
// respond with an appropriate error message.

const Numeric_Middleware = (req, res, next) => {
    const age = req.query.age;
    if (isNaN(age)) {
      res.status(400).send("Please enter a numeric value for age");
    } else {
      next();
    }
  };
  
  module.exports = Numeric_Middleware;