const mongoose = require("mongoose");
require("dotenv").config();


const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb://amansinghbiuri:amanhaha@cluster0.bkvvfnl.mongodb.net/Mediaplayer", { useNewUrlParser: true, useUnifiedTopology: true })
		.then(console.log(`DB ka Connection Success`))
};






