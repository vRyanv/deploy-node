const Course = require('../model/Course')

class APIController{

    // [GET] /api/home/:slug
    show(req, res, next)
    {
        Course.findOne()
        res.json({home:req.query.home})
        console.log(req.query.home)
    }
}

module.exports = new APIController