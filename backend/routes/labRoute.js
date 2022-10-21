const express = require('express');
const router = express.Router({mergeParams: true});
const {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs
} = require('../controllers/labController')
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getLabs).post(protect, setLabs);
router.route('/:labId').put(protect, updateLabs).delete(protect, deleteLabs);

module.exports = router;