const asyncHandler = require('express-async-handler');
const Lab = require('../models/labModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = asyncHandler(async(req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // get token from header
      token = req.headers.authorization.split(' ')[1];
      // bearer token -> bearer' 'token -> ['bearer','token'] [1]='token'
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password'); // wil not include password

      next(); // middleware needs to call next middleware

    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized')
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
})

// const labProtect = asyncHandler( async(req, res, next) => {
//   try {

//     console.log(req.params.labId)
//     console.log(req.body.parentId)

//     next();

//   } catch (err) {
//     console.log(err)
//     res.status(401);
//     throw new Error('Not authorized')
//   }
// })

module.exports = {
  protect
}