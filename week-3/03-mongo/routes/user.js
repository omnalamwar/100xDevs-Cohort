const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    console.log(courses);
    return res.json({courses});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
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