
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
require("dotenv").config()

exports.createLogo = async (req, res) => {
    try {
      // Get all required fields from request body
      let {
        email
      } = req.body
      // Get thumbnail image from request files
      const thumbnail = req.files.thumbnailImage
  
      // Check if any of the required fields are missing
      if (
        !email ||
        !thumbnail 
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
     
      // Upload the Thumbnail to Cloudinary
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      )
      console.log(thumbnailImage)
      
     const user_details =  await User.findOneAndUpdate(
        {
          email: email,
        },
        {
          $set: {
            image:thumbnailImage.secure_url ,
          },
        },
        { new: true }
      )
      res.status(200).json({
        image : user_details.image ,
        success: true,
        message: "Image Uploaded",
        user_details,
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to create logo",
        error: error.message,
      })
    }
  }

  exports.getLogo = async (req, res) => {
    try {
      // Get all required fields from request body
      let {
        email
      } = req.body
      // Check if any of the required fields are missing
      if (
        !email  
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
      
      const user_details = await User.find(
        {
          email: email,
        }
      )
      res.status(200).json({
        image : user_details.image,
        success: true,
        message: "Image data",
        user_details
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to give image to clint",
        error: error.message,
      })
    }
  }

  
exports.deleteLogo = async (req, res) => {
    try {
      // Get all required fields from request body
      let {
        email
      } = req.body
      // Check if any of the required fields are missing
      if (
        !email 
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
     
      const user_details = await User.findOneAndUpdate(
        {
          email: email,
        },
        {
          $set: {
            image: "" ,
          },
        },
        { new: true }
      )
      res.status(200).json({
        image : user_details.image ,
        success: true,
        message: "Image deleted",
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to delete logo",
        error: error.message,
      })
    }
  }
 