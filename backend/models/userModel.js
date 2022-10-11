const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  isAdmin: {
    type: Boolean
  },
  isGRA: {
    type: Boolean
  },
  isURA: {
    type: Boolean
  }
})

module.exports = mongoose.model('User', userModel);