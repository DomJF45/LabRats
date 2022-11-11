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
        labId: req.params.labId,
        projectId: req.params.projectId,
        taskId: req.body.taskId,
        taskName: req.body.taskName,
        inProgress: true,
        complete: false,
        notes: req.body.notes,
        assigned: req.body.assigned,
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

const editTask = asyncHandler(async(req, res) => {
  const lab = await Lab.findOne({labId: req.params.labId});

  if (!lab) {
    res.status(400);
    throw new Error('Lab not found');
  }

  const editTask = await Lab.findOneAndUpdate({labId: req.params.labId, 'tasks.taskId': req.params.taskId}, {
    $set: {
      'tasks.$': req.body
    }
  }, {overwrite: false})

  res.status(200).json(editTask);

})

const deleteTask = asyncHandler( async (req, res) => {
  const lab = await Lab.findOneAndUpdate({labId: req.params.labId}, {
    $pull: {
      tasks: {
        taskId: req.params.taskId
      }
    }
  })
  res.status(200).json(lab);
})


module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask
}
