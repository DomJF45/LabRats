const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  labId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lab'
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  role: {
    type: String,
    required: [true, 'Please add a role']
  }
})

module.exports = mongoose.model('User', userModel);