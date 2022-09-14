const asyncHandler = require('express-async-handler');
const Lab = require('../models/labModel');

const addUser = asyncHandler( async (req, res) => {
  const lab = await Lab.findById(req.params.id)
  if (!lab) {
    res.status(400)
    throw new Error('Cannot find lab');
  }
  const updatedLab = await Lab.findByIdAndUpdate(req.params.id, req.body.users, {new: true});
  res.status(200).json(updatedLab);
})