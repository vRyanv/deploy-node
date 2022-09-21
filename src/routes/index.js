const newRouter = require('./new.route')
const courseRouter = require('./course.route')
const APIRouter = require('./API/home.api')
const accountRouter = require('./account.route')

function route(app)
{
    app.use('/new', newRouter)
    app.use('/course', courseRouter)
    app.use('/api', APIRouter)
    app.use('/account', accountRouter)
}

module.exports = route