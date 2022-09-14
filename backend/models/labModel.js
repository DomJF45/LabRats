const mongoose = require('mongoose');

const labModel = mongoose.Schema({
  labName: String,
  users: [
    { 
      name: String, 
      role: String
    }
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