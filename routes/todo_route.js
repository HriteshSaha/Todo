const router = require('express').Router()
const todoForm = require('../controllers/todoForm_controller.js')
const addTodo = require('../controllers/addTodo_controller.js')

router.get('/todo', todoForm)
router.post('/todo', addTodo)

module.exports = router