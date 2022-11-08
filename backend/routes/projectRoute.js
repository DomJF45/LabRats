const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
  getOneProject
} = require('../controllers/projectController')
const {labProtect} = require('../middleware/authMiddleware')

router.route('/').get(getProjects).post(setProject);
router.route('/:projectId').put(updateProject).delete(deleteProject).get(getOneProject);

module.exports = router;