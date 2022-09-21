const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')


router.get('/create', courseController.create)
router.post('/save', courseController.save)
router.get('/showAll', courseController.showAll)
router.get('/:slug', courseController.show)

module.exports = router