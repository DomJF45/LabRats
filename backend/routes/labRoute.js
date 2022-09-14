const express = require('express');
const router = express.Router({mergeParams: true});
const {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs
} = require('../controllers/labController')

router.route('/').get(getLabs).post(setLabs);
router.route('/:labId').put(updateLabs).delete(deleteLabs);

module.exports = router;