//6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.

const geoip = require("geoip-lite");
import { Request,Response,NextFunction } from "express";
const expectedRegion = "United States";

const locationValidationMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);

  if (!geo || !geo.country || geo.country !== expectedRegion) {
    return res
      .status(403)
      .send({ error: "Unauthorized: Request not from expected region" });
  }
  next();
};

module.exports = locationValidationMiddleware;
