const asyncHandler = require('express-async-handler');
const Lab = require('../models/labModel');

const labProtect = asyncHandler( async(req, res, next) => {
  try {

    console.log(req.params.labId)
    console.log(req.body.parentId)

    next();

  } catch (err) {
    console.log(err)
    res.status(401);
    throw new Error('Not authorized')
  }
})

module.exports = {
  labProtect
}