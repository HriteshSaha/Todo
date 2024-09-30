const router = require('express').Router()
const todoForm = require('../controllers/todoForm_controller.js')
const addTodo = require('../controllers/addTodo_controller.js')
const authMiddleware = require('../middlewares/authenticationMiddleware.js') 

router.get('/todo', authMiddleware, todoForm)
router.post('/todo', authMiddleware, addTodo)

module.exports = router