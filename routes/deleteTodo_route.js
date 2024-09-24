const deleteTodo = require('../controllers/deleteTodo_controller.js');
const router = require('express').Router();

router.delete('/todo/delete/:id', deleteTodo);
// router.get('/todo/delete/:id', deleteTodo);

module.exports = router;