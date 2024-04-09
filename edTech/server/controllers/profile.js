const Profile = require("../models/Profile")
const CourseProgress = require("../models/CourseProgress")

const Course = require("../models/Course")
const User = require("../models/User")
const {uploadImageToCloudinary} = require("../utils/imageUploader")
const mongoose = require("mongoose")
const {convertSecondsToDuration} = require("../utils/secToDuration")



exports.updateProfile = async (req,res) =>{
    try{
        const {
            firstName = "",
            lastName = "",
            dateOfBirth = "",
            about = "",
            contactNumber = "",
            gender = "",
        } = req.body

        const id = req.user.id

        const userDetails = await User.findById(id)
        const profile = await Profile.findById(userDetails.additionalDetails)

        const user = await User.findByIdAndUpdate(id,{firstName,lastName})
        await user.save()


            profile.dateOfBirth = dateOfBirth,
            profile.about = about,
            profile.contactNumber = contactNumber,
            profile.gender = gender,

        await profile.save()
        
        const updatedUserDetails = await User.findbyId(id).populate("additionalDetails").exec()
        return res.json({
            success: true,
            message: "Profile updated successfully",
            updatedUserDetails,
          })
    }

    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            error:error.message,
        })
    }
}