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

  parentId: mongoose.Schema.Types.ObjectId,
  name: String,
  userId: Number // needs to be user later on
})

module.exports = mongoose.model('Project', projectModel);