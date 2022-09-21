const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String, maxLength:255},
    img: {type: String, maxLength:255},
    description: {type: String, maxLength: 600},
    slug: {type: String, slug:'name'},
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Course', Course)