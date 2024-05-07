

const validation = require("./config");
const middleware = (req, res, next) => {
  const route = req.path;
  console.log(route);
  const method = req.method;
  console.log(method);

  if (validation[route] && validation[route][method]) {
    const rules = validation[route][method];
    console.log(rules);
    if (method == "POST") {
      for (const [fieldName, fieldRules] of Object.entries(rules)) {
        console.log(fieldName);
        if (fieldRules.required && !req.body[fieldName]) {
          return res.status(400).json({ error: `${fieldName} is required` });
        }
        if (
          fieldRules.minLength &&
          req.body[fieldName].length < fieldRules.minLength
        ) {
          return res
            .status(400)
            .json({
              error: `${fieldName} must be at least ${fieldRules.minLength} characters long`,
            });
        }
      }
    } else if (method == "GET") {
      for (const [fieldName, fieldRules] of Object.entries(rules)) {
        console.log(fieldName);
        if (fieldRules.required && !req.body[fieldName]) {
          return res.status(400).json({ error: `${fieldName} is required` });
        }
       else if (
          fieldRules.minLength &&
          req.body[fieldName].length < fieldRules.minLength
        ) {
          return res
            .status(400)
            .json({
              error: `${fieldName} must be at least ${fieldRules.minLength} characters long`,
            });
        }
      }
    }
  }
  next();
};

module.exports = middleware;