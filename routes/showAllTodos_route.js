const router = require('express').Router()
const showAllTodo = require('../controllers/showAllTodos_controller.js')
const authMiddleware = require('../middlewares/authenticationMiddleware.js') 

module.exports = router.get('/showAllTodos', authMiddleware, showAllTodo)