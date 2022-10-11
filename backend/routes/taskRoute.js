const express = require('express');
const router = express.Router({mergeParams: true})
const {
  getTasks
} = require('../controllers/taskController');

router.route('/').get(getTasks);

module.exports = router;