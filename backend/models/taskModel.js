const mongoose = require('mongoose');

const taskModel = mongoose.Schema({
  parentId: mongoose.Schema.Types.ObjectId,
  taskName: {
    type: String,
    required: [true, 'please add a task name']
  },
  inProgress: Boolean,
  complete: Boolean,
  notes: String,
  assigned: [
    {
      user: mongoose.Schema.Types.ObjectId
    }
  ]
})

module.exports = mongoose.model('Task', taskModel);