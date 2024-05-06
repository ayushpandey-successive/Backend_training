const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; 

const generateToken = (req, res) =>{
   
    const payload = {
        userId: req.id ,
        username: req.username
        
    };

    
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

   res.json({"token":token})
}

module.exports={generateToken}