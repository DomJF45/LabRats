const express = require('express');
const router = express.Router({mergeParams: true})
const {
  getTasks,
  addTask
} = require('../controllers/taskController');

router.route('/').get(getTasks).post(addTask);


module.exports = router;