const asyncHandler = require('express-async-handler');
// 
const Lab = require('../models/labModel');

// returns all labs
const getLabs = asyncHandler(async (req, res) => {
  // get body data
  const labs = await Lab.find() // later on will find by user
  res.status(200).json(labs);
})

// creates lab
const setLabs = asyncHandler(async (req, res) => {
  // if (!req.body.labName && !req.body.projects) {
  //   res.status(400)
  //   throw new Error('Please add Lab Name')
  // }
  const newLab = await Lab.create({
    labName: req.body.labName
    
  });
  res.status(200).json(newLab);

})

// updates lab
const updateLabs = asyncHandler(async (req, res) => {
  const lab = await Lab.findById(req.params.labId)
  if (!lab) {
    res.status(400)
    throw new Error('Lab not found');
  }
  const newLab = await Lab.findByIdAndUpdate(req.params.labId, req.body, {
    new: true
  })
  res.status(200).json(newLab)
  console.log(req.params.labId)
})

// deletes lab
const deleteLabs = asyncHandler(async (req, res) => {

  const lab = await Lab.findById(req.params.id);
  if (!lab) {
    res.status(400)
    throw new Error('Lab not found');
  }
  await lab.remove();

  res.status(200).json({ id: req.params.id });
})

// exports all controllers -> import into route files
module.exports = {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs
}