const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
// 
const Lab = require('../models/labModel');
const userModel = require('../models/userModel');


// returns all labs
const getLabs = asyncHandler(async (req, res) => {
  // get body data
  const labs = await Lab.find({$or: [{ admin: req.user.id }, {users: {userId: req.user.id}}]})
   // later on will find by user
  console.log('I am a bug at getLabs - labController');
  console.log(labs);
  res.status(200).json(labs); 
})

// creates lab
const setLabs = asyncHandler(async (req, res) => {
  // if (!req.body.labName && !req.body.projects) {
  //   res.status(400)
  //   throw new Error('Please add Lab Name')
  // }
  
  const { labName, password, institution, fieldOfStudy } = req.body;

  if (!labName || !password || !institution || !fieldOfStudy ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  
  const labExists = await Lab.findOne({labName});

  if (labExists) {
    res.status(400);
    throw new Error('Lab already exists')
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)

  const lab = await Lab.create({
    labName,
    password: hashedPassword,
    admin: req.user.id,
    institution,
    fieldOfStudy
  });

  if (lab) {
    res.status(201); // lab created
    res.json({
      labName: lab.name,
      admin: lab.admin,
      institution: lab.institution,
      fieldOfStudy: lab.fieldOfStudy,
      token: generateToken(lab._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid Lab Data')
  }
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

const joinLab = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const lab = await Lab.findById(id);
  if (lab && (await bcrypt.compare(password, lab.password))) {

    await Lab.findByIdAndUpdate({id: id}, {$push: {users: {name: req.user.name, role: req.user.roll, userId: req.user.id }}}, {overwrite: false});

    res.status(200);
    res.json({
      lab
    })
  } else {
    res.status(400)
    throw new Error('Invalid Lab Information')
  }
})


const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

// exports all controllers -> import into route files
module.exports = {
  getLabs,
  setLabs,
  updateLabs,
  deleteLabs,
  joinLab
}