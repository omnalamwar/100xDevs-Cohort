const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { SECRET } = require('../config/default.json');

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    const result = await user.save();
    console.log(result);
    return res.json({"message": "User created successfully"}); 
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const result = await Admin.find({
        username,
        password
    })

    if(result){
        const token = jwt.sign({username}, SECRET);
        res.json({token});
    } else{
        return res.status(411).json({"message": "Invalid username or password"});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    console.log(courses);
    return res.json({courses});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;
    
    await User.updateOne({
        username: username
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    })
    return res.json({"message": "Course purchased successfully"});
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({username: req.headers.username})
    console.log(user);
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    return res.json({courses})
});

module.exports = router