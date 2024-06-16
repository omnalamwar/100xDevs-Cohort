const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/default');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const headertoken = req.headers.authorization;
        const words = headertoken.split(" ");
        const result = words[1];
        const verified = jwt.verify(result, SECRET);
        if(verified.username){
            req.username = verified.username;
            next();
        }
        else{
            console.log('You are unauthorized');
            res.status(403).json({"message": "You are unauthorized"});
        }
    }catch(err){
        console.log('You are unauthorized');
        res.status(403).json({"message": "You are unauthorized"});
    }
}

module.exports = adminMiddleware;