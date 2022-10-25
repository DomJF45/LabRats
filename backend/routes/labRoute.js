const express = require('express');
const router = express.Router({mergeParams: true});
const {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs,
  joinLab
} = require('../controllers/labController')
const { protect, updateProtect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getLabs).post(protect, setLabs);
router.route('/:labId').put(protect, updateLabs).delete(protect, deleteLabs);
router.post('/join', protect, joinLab)
module.exports = router;