
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

const authenticateJWT = (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden access
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized access
    }
};

module.exports = authenticateJWT;