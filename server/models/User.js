const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

   
    password: {
      type: String,
      required: true,
    },

    token: {
        type: String,
    },
  
    text_field: {
      type: String,
    },
   
    image: {
      type: String,
    },
  

  },
  { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)
