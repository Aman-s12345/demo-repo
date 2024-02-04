const User = require("../models/User")
require("dotenv").config()

exports.createText = async (req, res) => {
    try {
      // Get all required fields from request body
      let {
        email ,
        text,
      } = req.body
    
  
      // Check if any of the required fields are missing
      if (
        !email || !text
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
     
      
     const user_details =  await User.findOneAndUpdate(
        {
          email: email,
        },
        {
          $set: {
            text_field :text ,
          },
        },
        { new: true }
      )
      res.status(200).json({
        text: user_details.text_field,
        success: true,
        message: "Text Uploaded",
        user_details,
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to upload text ",
        error: error.message,
      })
    }
  }

  exports.getText = async (req, res) => {
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
        text: user_details[0].text_field,
        success: true,
        message: "Text data",
         user_details,
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to give Text to clint",
        error: error.message,
      })
    }
  }

  
exports.deleteText = async (req, res) => {
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
            text_field:" " ,
          },
        },
        { new: true }
      )
      res.status(200).json({
        text: user_details.text_field,
        success: true,
        message: "text deleted",
        user_details,
        
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to delete text",
        error: error.message,
      })
    }
  }
 