const File = require("../models/File");

//localFileUpload
exports.localFileUpload = async (req,res)=>{
    try {
        const file = req.files.file;
        console.log("File fetched",file);

        let path = __dirname + "/files/"+Date.now()+ `.${file.name.split('.')[1]}`;
        console.log("PATH ->",path);

        file.mv(path,(err)=>{console.log(err);});

        res.json({success:true,message:"Local file uploaded successfully"})
    } catch (error) {
        console.log(error);
    }
};