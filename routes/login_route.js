const router = require('express').Router()
const {loginForm , userLogin} = require('../controllers/login_controller')

router.get('/login', loginForm)

router.post('/login', userLogin)


 module.exports = router