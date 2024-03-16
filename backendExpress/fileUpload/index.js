// app
const express = require("express");
const app = express();
// port 
require("dotenv").config();
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());
// db
const db = require("./config/database");
db.connect();
// connect cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
// api route
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);
// activate server
app.listen(PORT,()=>{
    console.log(`App running at ${PORT}`);
})