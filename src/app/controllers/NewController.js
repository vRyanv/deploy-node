const Course = require('../model/Course')
const {multipleDataMongoToObject} = require('../../util/handleDataMongo')


class NewController{

    // [GET] /new/
    index(req, res, next)
    {
        Course.find({})
            .then(courses => res.render('home/new', {
                courses
            }))
            .catch(error => next(error))
    }

    // [GET] /news/something
    something(req, res)
    {
        res.render('something', {layout:false})
    }

    html(req, res)
    {
        res.render('home/home.ejs', {body:'hello word', title: 'VIP'})
    }

}

module.exports = new NewController