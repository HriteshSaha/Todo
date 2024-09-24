const router = require('express').Router()
const homepage = require('../controllers/homePage_controller.js')

module.exports = router.get('/', homepage)