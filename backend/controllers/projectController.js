const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');
const Lab = require('../models/labModel');


const getProjects = asyncHandler( async(req, res) => {
  // const lab = await Lab.find({})

  const projects = await Project.find({parentId: req.params.labId});
  
  
  res.status(200).json(projects);
})

const setProject = asyncHandler( async(req, res) => {

  const project = await Project.create({
    parentId: req.params.labId,
    name: req.body.name,
    userId: req.body.userId
  })

  const lab = await Lab.findById(req.params.labId);
  if (!lab) {
    res.status(400)
    throw new error('Not found')
  }
  await Lab.findOneAndUpdate(req.params.labId, {$push: {projects: {name: req.body.name}}}, {overwrite: false})
  res.status(200).json(project);
})

const updateProject = asyncHandler( async(req, res) =>{

  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400)
    throw new Error('Not Found')
  }
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
  
  res.status(200).json(updatedProject);
})

const deleteProject = asyncHandler( async(req, res) => {

  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error('Not Found');
  }

  await project.remove();

  res.status(200).json({ id: req.params.id})  
})

module.exports = {
  getProjects,
  setProject,
  updateProject,
  deleteProject
}