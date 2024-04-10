const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const {auth,isInstructor} = require("../middleware/auth")

const {
    deleteAccount,
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getEnrolledCourses,
    instructorDashboard,
} = require("../controllers/profile")

// delete user accounts
router.delete("/deleteProfile",auth,deleteAccount)
router.put("/updateProfile",auth,updateProfile)
router.get("/getUserProfile",auth,getAllUserDetails)
// get enrolled courses
router.get("/getEnrolledCourses",auth,updateDisplayPicture)
router.get("/updateDisplayPicture",auth,getEnrolledCourses)
router.get("/instructorDashboard",auth,isInstructor,instructorDashboard)

module.exports = router 