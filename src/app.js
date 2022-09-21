const express = require('express')
// const morgan = require('morgan')
const ejs = require('ejs')
const app = express()
const port = 2108
const path = require('path')

const route = require('./routes')
const database = require('./config/database/mongooseDB')

database.connect()

//get image from public
app.use(express.static(path.join(__dirname, 'public')))

//use middleware to get post form
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resources\\views'))

// Route init
route(app)
console.log('added route')
app.listen(process.env.PORT || port, () => console.log('listen request'))