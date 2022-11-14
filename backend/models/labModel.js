const mongoose = require('mongoose');

const labModel = mongoose.Schema({
  labName: {
    type: String,
    required: [true, "Please add a lab name"],
    unique: true
  },
  labId: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a lab password']
  },
  admin: [
    {
      adminName: String,
      adminID: mongoose.Schema.Types.ObjectId
    }
  ],
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
      projectId: String,
      labId: String,
      projectName: {
        type: String,
        required: [true, 'Please add a Project Name']
      },
      manager: String,
      assignedTo: String,
      complete: Boolean,
      color: String
    }
  ],
  tasks: [
    {
      labId: String,
      projectId: String,
      taskId: String,
      taskName: {
        type: String,
        required: [true, 'please add a task name']
      },
      inProgress: Boolean,
      complete: Boolean,
      notes: String,
      assigned: String,
      color: String
    }
  ],
  color: String

},
{
  timestamps: true
})

module.exports = mongoose.model('Lab', labModel);