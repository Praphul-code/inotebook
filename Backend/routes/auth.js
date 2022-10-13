const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'PraphulIsFullStackProgrammer';

//ROUTE 1:  Create a User using: Post "/api/auth/createuser". No login required
router.post('/createuser', [

  body('name', 'Enter Valid Name').isLength({ min: 5 }),
  body('email', 'Enter Valid Email Address').isEmail(),
  body('password', 'Enter Atleast 5 Characters').isLength({ min: 5 }),
]
  , async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check wheather user exits with email already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with email already exits" })
      }
      const salt = await  bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      const data ={
        user:{id: user.id}
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({authtoken})
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever Error");
    }
    // .then(user => res.json(user))
    // .catch(err=> {console.log(err)
    //  res.json({error: 'Please Enter Unique Value For email'} )})
  })

  // ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login Required

  router.post('/login', [

    
    body('email', 'Enter Valid Email Address').isEmail(),
    body('password', 'Password cannot be blank ').exists(),
  ]
    , async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const  {email, password} = req.body;
      try {
        let user =await User.findOne({email});
        if(!user){
          return res.status(400).json({error: "Please Try To Login With Correct Credentials"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
          return res.status(400).json({error: "Please Try To Login With Correct Credentials"})
        }

        const data ={
          user:{
            id: user.id
          }
        }
        const authtoken =jwt.sign(data, JWT_SECRET);
        res.json({authtoken})
      }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
      }
    
    })
// ROUTE 3 : Get  loggin user using: POSt "/api/auth/getuser ".  Login required
router.post('/getuser', fetchuser
  , async (req, res) => {
try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
}catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Sever Error");
  
}


  })
module.exports = router