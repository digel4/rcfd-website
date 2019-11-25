const mongoose = require("mongoose");
// Experimentor SCHEMA

const experimentorSchema = new mongoose.Schema({
	name: String,
	date: String,
	image: String,
	description: String,
	author: {
		id: {
type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports = mongoose.model("Experimentor", experimentorSchema);