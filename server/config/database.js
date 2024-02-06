const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			
		})
		.then(console.log(`DB ka Connection Success`))
};






