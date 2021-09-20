const mongoose              = require("mongoose"),
	  passportLocalMongoose = require("passport-local-mongoose");

const ParticipantSchema = new mongoose.Schema({
	username: String,
	password: String
});

ParticipantSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Participant", ParticipantSchema);
