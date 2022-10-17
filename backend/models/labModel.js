const mongoose = require('mongoose');

const labModel = mongoose.Schema({
  labName: String,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
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