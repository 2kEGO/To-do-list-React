import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

import verifyToken from '../middleware/authMiddleware.js';


const router = express.Router();


// Register new user
router.post('/register', async(req, res) => {
  try {
    const {username, password, email} = req.body;

    // Check if username exists
    const existingUser = await User.findOne({username})

    if (existingUser){
        //check username
        if(existingUser.username === username || existingUser.email === email){
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
    const newUser = new User({username, password: hashpassword, email})
    
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

        // res.json({msg: 'Login successful' });

        //Generate Jwt token
        const secret = process.env.VITE_SECRET_KEY;
        if (!secret){
            throw new Error("SECRET_KEY is not defined in .env");
        }

        const token = jwt.sign({username: user.username}, secret, {expiresIn: '1h',});

        res.json({msg: 'Login successful', token})

    } 
    catch(error) {
        console.error(error);
        res.json({message: 'Server error'});
    }
})


router.get('/user-info', verifyToken, async (req, res) => {
    try {
        // Use the userId from the decoded token to fetch user details from the database
        const user = await User.findOne({ username: req.user.username }).select('username password');
        
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        }

        // Return user details (excluding password in a real scenario)
        res.json({
            username: user.username,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server error'});
    }
});

router.put('/update-user', verifyToken, async(req,res) => {
    const {username, password, email} = req.body;

    try {
        const user = await User.findOne({username: req.user.username})

        if(!user){
            return res.status(404).json({msg: 'User not found duma'})
        }

        if(email) {
            if(email === user.email){
                return res.status(400).json({msg: 'Email cannot be the same'});
            }
            
            user.email = email;
        };

        if (password) {

            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                return res.status(400).json({ msg: 'Passwords cannot be the same' });
            }

            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.status(200).json({msg: 'User data updated'})

    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'server error'})
    }
})

export default router;