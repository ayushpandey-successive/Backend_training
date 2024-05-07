//6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.

const geoip = require("geoip-lite");


const expectedRegion = "US";

const locationValidationMiddleware = (req, res, next) => {
  const ip ="207.97.227.239";
  
  const geo = geoip.lookup(ip);
  

  if (!geo || !geo.country || geo.country !== expectedRegion) {
    return res
      .status(403)
      .send({ error: "Unauthorized: Request not from expected region" });
  }
  next();
};

module.exports = locationValidationMiddleware;