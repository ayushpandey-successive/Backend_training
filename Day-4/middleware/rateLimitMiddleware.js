

const { RateLimiterMemory } = require('rate-limiter-flexible')


const rateLimiter = new RateLimiterMemory({
    points:2,
    duration:5,
});

const rateLimitMiddleware = (req,res,next) => {
    rateLimiter.consume(req.ip)
    .then(()=>{
        next();
    })
    .catch(()=>{
        res.status(429).send("too many requests");
    });
};

module.exports = {rateLimitMiddleware}