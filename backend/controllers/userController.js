const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Lab = require('../models/labModel')

// POST -- Register User -- /api/users -- public
const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password, role } = req.body

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error('User already exists')
  }
  
  // need to hash passwords
  const salt = await bcrypt.genSalt(10); // generate the salt
  const hashedPassword = await bcrypt.hash(password, salt);
  // hash password by sending password and salt

  // create user
  const user = await User.create({
    
    name,
    email,
    password: hashedPassword, // store hashed password as password
    role,
    
  })

  if (user) {
    res.status(201)
    res.json({
      
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      role: user.role
    }) 
  } else {
    res.status(400)
    throw new Error('INVALID USER DATA  ')
  }
  

  res.json({message: "Register user"})

})

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({email});

  // get password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      role: user.role
    })
  } else {
    res.status(400)
    throw new Error('INVALID CREDENTIALS')
  }
})

const getUser = asyncHandler(async (req, res) => {
   // set this in the middleware

  res.status(200).json(req.user)
})

const addLab = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const { labId } = await User.findById(req.user.id);
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true
  })

  res.status(200).json(updatedUser);
  const lab = await Lab.findById(labId)

  if(!lab) {
    res.status(400)
    throw new Error('Lab not found')
  }
  await Lab.findOneAndUpdate({_id: user.labId}, {$push: {users: {name: user.name, role: user.role, userId: user._id}}}, {overwrite: false})
  
})

const updateUser = asyncHandler(async(req, res) => {
  

  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true
  })
  res.status(200).json(updatedUser);
})

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  addLab,
  updateUser
}