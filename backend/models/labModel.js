const mongoose = require('mongoose');

const labModel = mongoose.Schema({
  labName: {
    type: String,
    required: [true, "Please add a lab name"],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a lab password']
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
  },
  institution: {
    type: String,
    required: [true, 'Please add an institute']
  },
  fieldOfStudy: {
    type: String,
    required: [true, 'Please add a field of study']
  },
  users: [
    { 
      name: String,
      role: String,
      userId: mongoose.Schema.Types.ObjectId
    },
  ],
  projects: [
    { 
      name: String, 
      userId: Number
    }
  ]

},
{
  timestamps: true
})

module.exports = mongoose.model('Lab', labModel);