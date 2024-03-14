import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res) =>{
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords dont match"})
        } 
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User Already exist"})
        }
        //HASH password here
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        //Profile pic here
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            confirmPassword,
            gender,
            profilePic:gender === "male" ? boyProfilePic : girlProfilePic
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res); 
            
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            });
        }else{
            res.status(400).json({error:"invalid user data"});
        }
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};
export const login = (req,res) =>{console.log("login user");};
export const logout = (req,res) =>{console.log("logout user");};

// export const signup = (req,res)=>{
//     res.send("signup")
//     console.log("signup")}
// export const login = (req,res)=>{console.log("signup")}
// export const logout = (req,res)=>{console.log("signup")}