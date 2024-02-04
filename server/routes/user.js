// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    login,
    signup,
    sendotp,
} = require("../controllers/Auth")

const {
    createLogo,
    getLogo,
    deleteLogo,

} = require("../controllers/Logo");

const {
    createText,
    getText,
    deleteText,

} = require("../controllers/Text");



// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)



router.post("/createLogo", createLogo)

// Route for user signup
router.post("/deleteLogo", deleteLogo)

// Route for sending OTP to the user's email
router.post("/getLogo", getLogo)



router.post("/createText", createText)

// Route for user signup
router.post("/deleteText", deleteText)

// Route for sending OTP to the user's email
router.post("/getText", getText);


module.exports = router
