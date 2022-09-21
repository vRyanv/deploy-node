const express = require('express')
const router = express.Router()
const accountController = require('../app/controllers/AccountController')


router.get('/create', accountController.create)
router.get('/showAll', accountController.showAll)
router.post('/save', accountController.save)


module.exports = router