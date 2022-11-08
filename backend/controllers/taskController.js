const asyncHandler = require('express-async-handler');
const Lab = require('../models/labModel');
const Task = require('../models/taskModel');

const getTasks = asyncHandler( async (req, res) => {
  const tasks = await Lab.findOne({labId: req.params.labId})

  res.status(200).json(tasks)
})

const addTask = asyncHandler( async(req, res) => {

  const lab = await Lab.findOne({labId: req.params.labId});

  if (!lab) {
    res.status(400);
    throw new Error('Lab not found');
  }

  const addTaskToLab = await Lab.findOneAndUpdate({labId: req.params.labId}, {
    $push: {
      tasks: {
        projectId: req.params.projectId,
        taskId: req.body.taskId,
        taskName: req.body.taskName,
        inProgress: true,
        complete: false,
        notes: req.body.notes,
        // assigned to 
        color: req.body.color
      }
    }
  }, {overwrite: false})

  if (addTaskToLab) {
    res.status(201);
    res.json({
      tasks: {
        projectId: req.params.projectId,
        taskId: req.body.taskId,
        taskName: req.body.taskName,
        inProgress: true,
        complete: false,
        notes: req.body.notes,
        color: req.body.color
      }
    })
  } else {
    res.status(400);
    throw new Error ('Error, Lab or Project was not found');
  }
})

const completeTask = asyncHandler(async(req, res) => {
  const lab = await Lab.findOne({labId: req.params.labId});

  if (!lab) {
    res.status(400);
    throw new Error('Lab not found');
  }

  const completeTask = lab.update({labId: req.params.labId}, 
    {taskId: req.params.taskId}, {$set: {
      inProgress: false,
      complete: true
    }
  })

  if (completeTask) {
    res.status(200);
    res.json({
      taskUpdated: {
        taskId: req.body.taskId
      }
    })
  }
})



module.exports = {
  getTasks,
  addTask,
  completeTask
}