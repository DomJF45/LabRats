const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');
const Task = require('../models/taskModel');

const getTasks = asyncHandler( async (req, res) => {
  const tasks = await Task.find({parentId: req.params.projectId});
  res.status(200).json(tasks)
})

const addTask = asyncHandler( async(req, res) => {
  const task = await Task.create({
    parentId: req.params.projectId,
    taskName: req.body.taskName,
    inProgress: true,
    complete: false,
    notes: req.body.notes
    //assigned : user stuff here
  })
  const project = await Project.findById(req.params.projectId);
  if (!project) {
    res.status(400)
    throw new Error('Not found')
  }
  await Project.findOneAndUpdate({_id: parentId}, {$push: {
    tasks: {
      name: req.body.name,
      id: task._id
    }}}, {overwrite: false})

  res.status(200).json(task);
})



module.exports = {
  getTasks,
  addTask
}