const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
jwtSecret = process.env.JWT_SECRET;
const app = express();
// console.log(jwtSecret)
app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_URL,
}));

app.get('/test',(req,res)=>{
    res.json('test okk');
});

app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    const createdUser = await User.create({username,password})
    jwt.sign({userId:createdUser._id},jwtSecret,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).status(201).json('ok');
    });
});

app.listen(4040);
// gVCs3Bi46oGrkjsx