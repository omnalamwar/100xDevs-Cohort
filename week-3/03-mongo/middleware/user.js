const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user = await User.findOne({username: req.headers.username, password: req.headers.password});

    if(!user){
        return res.status(404).json({"message": "user does not exists"});
    }
    console.log(user);
    next();
}

module.exports = userMiddleware;