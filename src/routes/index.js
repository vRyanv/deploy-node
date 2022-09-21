const newRouter = require('./new.route')
const courseRouter = require('./course.route')
const APIRouter = require('./API/home.api')
const accountRouter = require('./account.route')
const homeRouter = require('./home.route')

function route(app)
{
    app.use('/new', newRouter)
    app.use('/course', courseRouter)
    app.use('/api', APIRouter)
    app.use('/account', accountRouter)
    app.use('/', homeRouter)
}

module.exports = route