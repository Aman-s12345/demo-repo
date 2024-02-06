const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb://amansinghbiuri:amanhaha@cluster0.bkvvfnl.mongodb.net/Mediaplayer", {
			
		})
		.then(console.log(`DB ka Connection Success`))
};






