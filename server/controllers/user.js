// bcrypt use to hash the password . if database hacked everyone see all password if dont use bcrypt
import bcrypt  from 'bcryptjs';
// jwt use to  store the user in browser some period of time like 1 hour 2 hour or for 1 week
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message:"user doesn't exist."});
        }
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Passowrd"});
        }
        const token = jwt.sign({email:existingUser.email , id:existingUser._id},'test',{expiresIn:"1h"});
        res.status(200).json({result:existingUser,token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something is wrong"})
    }
}

export const signup = async(req,res)=>{
    const {email,password,confirmPassword,firstName,lastName} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        if(password != confirmPassword){
            return res.status(400).json({message:"password don't matched"});
        }
        
        const hashedPassword = await bcrypt.hash(password,12);

        const result = await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});

        const token = jwt.sign({email:result.email , id:result._id},'test',{expiresIn:"1h"});
        res.status(200).json({result,token});
        
        
    } catch (error) {
        res.status(500).json({message:"Something is wrong"})
    }
}