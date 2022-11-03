const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');
const Lab = require('../models/labModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');

const getProjects = asyncHandler( async(req, res) => {
  // const lab = await Lab.find({})

  const projects = await Project.find({parentId: req.params.labId});
  
  res.status(200).json(projects);
})

const setProject = asyncHandler( async(req, res) => {
  
  const lab = await Lab.findOne({labId: req.params.labId});
  
  if (!lab) {
    res.status(400)
    throw new error('Not found')
  }
  
  console.log('set project @ project controller')
  console.log(lab)

  const labUpdated = await Lab.findOneAndUpdate({labId: req.params.labId}, {$push: {
    projects: {
      projectId: req.body.projectId,
      labId: req.params.labId, 
      projectName: req.body.projectName, 
      manager: req.body.manager,
      assignedTo: req.body.assignedTo,
      color: req.body.color
    }
  }}, {overwrite: false})

  if (labUpdated) {
    res.status(201);
    res.json({
      projects: {
        projectId: req.body.projectId,
        labId: req.body.labId,
        projectName: req.body.projectName,
        manager: req.body.manager,
        assignedTo: req.body.assignedTo,
        color: req.body.color
      }
    })
  } else {
    res.status(400);
    throw new Error ('Error, please try again')
  }
  
  // console.log('setProject - line 38 - Project Controller')

  // res.status(200).json(lab.projects);

})

const updateProject = asyncHandler( async(req, res) =>{

  const project = await Project.findById(req.params.projectId);
  if (!project) {
    res.status(400)
    throw new Error('Not Found')
  }
  const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true});
  
  res.status(200).json(updatedProject);
})

const deleteProject = asyncHandler( async(req, res) => {

  // const project = await Project.findById(req.params.projectId);
  // if (!project) {
  //   res.status(400);
  //   throw new Error('Not Found');
  // }

  // await project.remove();
  
  const lab = await Lab.findOneAndUpdate({labId: req.params.labId}, {
    $pull: {
      projects: {
        projectId: req.params.projectId
      }
    }
  })
  res.status(200).json(lab)
})

module.exports = {
  getProjects,
  setProject,
  updateProject,
  deleteProject
}