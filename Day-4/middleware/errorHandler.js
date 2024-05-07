const errorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500; 
    const errorMessage = err.message || 'An unexpected error occurred';
  
    // Send the error response
    res.status(statusCode).json({
      error: {
        status: statusCode,
        message: errorMessage,
      },
    });
  };

  module.exports = {errorHandler}