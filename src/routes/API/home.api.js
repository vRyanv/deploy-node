const express = require('express')
const router = express.Router()
const APIController = require('../../app/controllers/APIController')


router.get('/home', APIController.show)

module.exports = router