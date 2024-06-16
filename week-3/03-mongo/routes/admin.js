const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    // const Model = mongoose.model('admin', Admin);

    const doc = new Admin({
        username: req.headers.username,
        password: req.headers.password
    });

    const result = await doc.save();
    if(!result){
        console.log('Error while registering admin');
        return;
    }
    // console.log(result);
    return res.json({"message": "Admin created successfully"});
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
//     { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }
    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })

    const result = await course.save();
    if(!result){
        console.log("Error while creating courses");
        return;
    }
    // console.log(result);
    return res.json({"message": "Course created successfully", "courseId": result._id});
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    // console.log(courses);
    return res.json({courses});
});

module.exports = router;