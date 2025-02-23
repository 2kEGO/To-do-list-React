const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jasonwebtoken');
import User from '../backend/models/users.js';

const router = express.Router();


// Register new user
router.post('/register', async(req, res) => {
  try {
    const {username, password, displayname, email} = req.body;

    // Check if username and email already exists
    const existingUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if (existingUser){
        //check username
        if(existingUser.username === username){
            return res.status(400).json({msg: 'Username already exists'});
        }

        //check email
        if(existingUser.email === email){
            return res.status(400).json({msg: 'Email already exists'});
        }
    }
    // Hash the password
    const hashpassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({username, password: hashpassword, displayname, email})
    
    //Save new user
    await newUser.save();

  } 
  catch (error) {
    console.error(error);
    res.json({message: 'Server error'});
  }  
})


//Login

router.post('/login', async(req, res) => {
    try {
        const {username, password} = req.body

        //Find user by username 
        const user = await findOne({username})
        if(!user) {
            return res.status(404).json({msg: 'Invalid Credentials'})
        }

        //Compare password
        const pwdMatch = await bcrypt.compare(password, user.password);
        if(!pwdMatch) {
            return res.status(404).json({msg: 'Invalid Credentials'})
        }

        //Generate Jwt token
        


    } 
    catch(error) {
        console.error(error)
    }
})



export default router;