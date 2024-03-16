const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log("DB connection successful"))
    .catch((error)=>{
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    });
};