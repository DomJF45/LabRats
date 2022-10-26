const express = require('express');
const router = express.Router({mergeParams: true});
const {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs,
  joinLab,
  getOneLab
} = require('../controllers/labController')
const { protect, labProtect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getLabs).post(protect, setLabs);
router.route('/:labId').put(protect, updateLabs).delete(protect, deleteLabs);
router.post('/join', protect, joinLab)
router.get('/getOneLab', labProtect, getOneLab)
module.exports = router;