const logRequestDetails = (req, res, next) => {
    const currentDateTime = new Date();
    console.log(`[${currentDateTime.toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  
  module.exports = logRequestDetails