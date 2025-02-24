import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

const router = express.Router();


// Register new user
router.post('/register', async(req, res) => {
  try {
    const {username, password} = req.body;

    // Check if username exists
    const existingUser = await User.findOne({username})

    if (existingUser){
        //check username
        if(existingUser.username === username){
            return res.status(400).json({msg: 'Username already exists'});
        }

        // //check email
        // if(existingUser.email === email){
        //     return res.status(400).json({msg: 'Email already exists'});
        // }
    }
    // Hash the password
    const hashpassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({username, password: hashpassword})
    
    //Save new user
    await newUser.save();

    return res.status(201).json({ msg: 'User registered successfully' });

  } 
  catch (error) {
    console.error(error);
    res.json({message: 'Server error'});
  }  
})


//Login

router.post('/login', async(req, res) => {
    try {
        const {username, password} = req.body;

        //Find user by username 
        const user = await User.findOne({username});
        if(!user) {
            return res.status(404).json({msg: 'Invalid Credentials'});
        }

        //Compare password
        const pwdMatch = await bcrypt.compare(password, user.password);
        if(!pwdMatch) {
            return res.status(404).json({msg: 'Invalid Credentials'});
        }

        res.json({msg: 'Login successful' });

        //Generate Jwt token
        


    } 
    catch(error) {
        console.error(error);
        res.json({message: 'Server error'});
    }
})



export default router;