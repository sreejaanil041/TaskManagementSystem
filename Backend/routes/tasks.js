const express = require('express');

const router = express.Router();

const taskController = require('../app/api/controller/tasks');

router.post('/create', taskController.create);

router.get('/', taskController.getAll);

module.exports = router; 