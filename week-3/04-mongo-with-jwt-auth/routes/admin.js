const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { SECRET } = require('../config/default');
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const doc = new Admin({
        username: req.body.username,
        password: req.body.password
    });

    const result = await doc.save();
    if(!result){
        console.log('Error while registering admin');
        return;
    }
    // console.log(result);
    return res.json({"message": "Admin created successfully"});
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

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;