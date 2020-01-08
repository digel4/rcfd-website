const express = require("express"),
	  router  = express.Router(),
	  passport = require("passport"),
	  User     = require("../models/user"),
	  Event      = require("../models/event");

//root route

router.get("/", (req, res) => {
// Get all events from DB
	Event.find({longDate: {$gte: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			var sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
			});
			res.render("landing", {events:sortedArray})
		}
	})
});

//================================================
//Auth Routes
//================================================

//Show register form

router.get("/enrol", (req, res) => {
	res.render("enrol");
})

router.get("/register", (req, res) => {
	res.render("register");
})

//handle sign up logic


router.post("/register", (req, res) => {
	console.log("ting1");
	var newUser = new User({username:"admin",
		  password:"hello"});
	console.log(newUser);
	User.register(newUser, newUser.password);
	passport.authenticate("local");
	res.redirect("/events");
});

//show login form

router.get("/login", (req, res) => {
	res.render("login");
});

//handling login logic

router.post("/admin", passport.authenticate("local", 
	{
		successRedirect: "/admin",
		failureRedirect: "/login"
	}), (req,res) => {

});

//logout route

router.get("/logout", (req, res) => {
	req.logout();
	req.flash("success", "logged you out!");
	res.redirect("/events");
});



module.exports = router;
