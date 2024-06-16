const {Admin} = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const result = await Admin.findOne({
        username: req.headers.username,
        password: req.headers.password
    });
    // console.log(result);
    if(!result){
        res.status(404).json({"message": "You are unauthorized"})
    }else{
        next();
    }
}

module.exports = adminMiddleware;