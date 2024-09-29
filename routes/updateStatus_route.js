const router = require('express').Router();
const updateStatus = require('../controllers/updateStatus_controller.js');

// Route to update the isDone status
router.post('/updateStatus/:id', updateStatus);

module.exports = router;
