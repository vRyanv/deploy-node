class HomeController{

    // [GET] /
    index(req, res, next)
    {
        res.render('home/home')
    }


}

module.exports = new HomeController