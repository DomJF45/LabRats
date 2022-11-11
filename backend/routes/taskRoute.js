const express = require('express');
const router = express.Router({mergeParams: true})
const {
  getTasks,
  addTask,
  editTask,
  deleteTask
} = require('../controllers/taskController');

router.route('/').get(getTasks).post(addTask);
router.route('/:taskId').put(editTask).delete(deleteTask);

module.exports = router;