const File = require("../models/File");
const cloudinary = require('cloudinary').v2;
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

function isFileTypeSupported(type,supportedType) {
    return supportedType.includes(type);
};

async function uploadFileToCloudinary(file,folder){
    const options={folder};
    await cloudinary.uploader.upload(file.tempFilePath,options);
};

exports.imageUpload = async (req,res)=>{
    try {
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);
        
        const file = req.files.imageFile;
        console.log("File fetched",file);

        //validation
        const supportedType = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:'File format not supported'
            })
        }
        // File format supported

        const response = await uploadFileToCloudinary(file,"codehelp");
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl
        });

        res.json({
            success:true,
            message:'Image successfully Uploaded'
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong'
        })
    }
};