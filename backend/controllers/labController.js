const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const Lab = require('../models/labModel');



// returns all labs
const getLabs = asyncHandler(async (req, res) => {
  // get body data
  let labs;

  if (req.user.role === 'Principle Investigator') {
    labs = await Lab.find({'admin': {$elemMatch: {adminID: req.user.id}}})
    if (!labs) {
      res.status(400);
      throw new Error('Lab not found')
    }
  } else {
    labs = await Lab.find({'users': {$elemMatch: {userId: req.user.id}}})
    if (!labs) {
      res.status(400);
      throw new Error('Lab not found')
    }
  }
  
  res.status(200).json(labs); 
})

const getOneLab = asyncHandler(async (req, res) => {
  
  const lab = await Lab.findOne({labId: req.lab.labId})
  
  if (!lab) {
    res.status(400);
    throw new Error('Not found')
  }
  res.status(200).json(lab);
})

// creates lab
const setLabs = asyncHandler(async (req, res) => {
  // if (!req.body.labName && !req.body.projects) {
  //   res.status(400)
  //   throw new Error('Please add Lab Name')
  // }
  
  const { labName, labId, password, institution, fieldOfStudy, color } = req.body;

  if (!labName || !password || !institution || !fieldOfStudy ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  
  const labExists = await Lab.findOne({labId});

  if (labExists) {
    res.status(400);
    throw new Error('Lab already exists')
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)

  const lab = await Lab.create({
    labName,
    labId,
    password: hashedPassword,
    admin: [
      {
        adminName: req.user.name,
        adminID: req.user.id
      }
    ],
    institution,
    fieldOfStudy,
    color
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
  console.log(`joinLab line 94 ${req.body}`)
  const { labId, password } = req.body;
  console.log(labId, password);
  const lab = await Lab.findOne({labId: labId});
  console.log(`Lab at 97 ${lab}`);
  if (!lab) {
    res.status(404);
    throw new Error("Lab not found")
  }
  if (lab && (await bcrypt.compare(password, lab.password))) {
    await lab.update({$push: {users: {name: req.user.name, role: req.user.role, userId: req.user._id}}}, {overwrite: false});
    res.status(200);
    res.json({
      lab
    })
  } else {
    console.log(`error`);
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
  joinLab,
  getOneLab
}