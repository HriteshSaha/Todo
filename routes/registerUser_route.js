const router = require('express').Router()
const { showRegistrationForm, registerUser } = require('../controllers/registerUser_controller.js')


router.get('/register', showRegistrationForm)
router.post('/register', registerUser)

module.exports = router