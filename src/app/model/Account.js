const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema({
    username: {type: String, maxLength:255},
    pass: {type: String, maxLength:255},
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Account', Account)