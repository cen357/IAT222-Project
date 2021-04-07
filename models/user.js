const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	animationCount: {
		type: String,
		required: [true, "Content can't be blank"],
	},
});

module.exports = mongoose.model("User", userSchema);
