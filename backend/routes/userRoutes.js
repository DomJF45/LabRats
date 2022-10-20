// log in, register, get user info
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  addLab,
  updateUser
} = require('../controllers/userController')
const {protect, updateProtect} = require('../middleware/authMiddleware');

router.post('/', registerUser)
router.post('/login', loginUser),
router.get('/me', protect, getUser)
// router.put('/me', protect, addLab)
router.put('/update', updateProtect, updateUser)

module.exports = router;