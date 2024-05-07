
const addCustomHeader = (headerName, headerValue) => {
  return (req, res, next) => {
    res.setHeader(headerName, headerValue);
    next();
  };
};


const customHeaderMiddleware = addCustomHeader('XX-Custom-Header', 'Ayush Pandey');

module.exports = {customHeaderMiddleware};