import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../frontend/app/generated/prisma/default.js';
import { returnResponse } from '../utils/helper.js';

const router = express.Router();
const prisma = new PrismaClient();

// Register route
router.post('/user/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // ---- validations ----
    //empty validation
    if(!email || !password || !username){
      return res.status(500).json(returnResponse(false, 'Missing parameters.'))
    }

    //email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
      return res.status(500).json(returnResponse(false, 'Invalid email format.'));
    }

    //password length validation
    if(password.length < 6){
      return res.status(500).json(returnResponse(false, 'Password should be greater than 6 characters.'));
    }

    //username length validation
    if(username.length > 20){
      return res.status(500).json(returnResponse(false, 'Username too long! Max 20 characters.'));
    }

    //already exist validation
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ email }, { username }]
        }
    });

    if (existingUser) {
        const conflictField = existingUser.email === email ? 'Email' : 'Username';
        return res.status(400).json({ message: `${conflictField} already registered` });
    }


    // ---- end validations ----

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { 
            email, 
            password: hashedPassword, 
            username 
        },
    });

    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/user/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    localStorage.setItem(token);
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




export default router;
