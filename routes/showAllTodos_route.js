const router = require('express').Router()
const showAllTodo = require('../controllers/showAllTodos_controller.js')

module.exports = router.get('/showAllTodos', showAllTodo)