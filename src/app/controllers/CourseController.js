const Course = require('../model/Course')
const {multipleDataMongoToObject} = require('../../util/handleDataMongo')

class CourseController{
    // [GET] /course/:slug
    show(req, res, next)
    {
       Course.findOne({ObjectId: req.params.slug})
        .then(course =>{
            res.json({course:course, slug:req.params.slug})
        })
        .catch(next)
    }

    // [GET] /course/showAll
    showAll(req, res, next)
    {
        Course.find()
            .then(course =>{
                res.render('course/courseList',{course})
            })
            .catch(next)
    }

    // [GET] /course/create
    create(req, res, next)
    {
        res.render('course/courseCreate')
    }

    // [POST] /course/save
    save(req, res, next)
    {
        let formData = req.body
        formData.img = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`
        let course = new Course(formData)
        course.save()
            .then(() => res.redirect('/course/showAll'))
            .catch(error => {

            })
    }
}

module.exports = new CourseController