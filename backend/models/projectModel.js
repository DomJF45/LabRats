const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
  // projectName: {
  //   type: String,
  //   required: [true, 'Please add a Project Name']
  // },
  // projectManager: {
  //   type: String,
  //   required: [true, 'Please add a project Manager']
  // },
  // projectInfo: {
  //   type: String,
  //   required: [true, 'Please add a description']
  // }

  labId: String,
  projectName: String,
  manager: String,
  assignedTo: [
    {
      assignedName: String
    }
  ], // needs to be user later on
  tasks: [
    {
      name: String,
      taskId: mongoose.Schema.Types.ObjectId
    }
  ],
  assigned: [
    {
      name: String,
      user: mongoose.Schema.Types.ObjectId
    }
  ]

})

module.exports = mongoose.model('Project', projectModel);