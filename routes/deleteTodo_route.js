const deleteTodo = require('../controllers/deleteTodo_controller.js');
const router = require('express').Router();

router.post('/delete/:id', deleteTodo);

module.exports = router;