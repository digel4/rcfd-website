const mongoose = require("mongoose");
// Application SCHEMA

const applicationSchema = new mongoose.Schema({
	// name: String,
	// longDate: Date,
	// shortDate: String,
	// image: String,
	// description: String,
	// startTime: String,
	// endTime: String,
	// businessName: String,
	// streetNumber: String,
	// streetName: String,
	// city: String,
	// postcode: String,
	// eventURL: String,
	// excerpt: String,
    fullName: String,
    email: String,
    personalStatement: String,
    over18: Boolean,
    location: Boolean,
    registeredBH: Boolean,
    
    
});


module.exports = mongoose.model("Application", applicationSchema);