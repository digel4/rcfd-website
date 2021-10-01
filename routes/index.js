const express = require("express"),
	  router  = express.Router(),
	  passport = require("passport"),
	  User     = require("../models/user"),
	  Participant     = require("../models/participant"),
	  Event      = require("../models/event"),
	  request = require('superagent');

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

// router.get("/enrol", (req, res) => {
// 	res.render("enrol");
// })

// router.get("/register", (req, res) => {
// 	res.render("register");
// })

//handle sign up logic


//===============================================================================
// Email Subscribe
//==============================================================================
const mailchimpInstance = "us8",
	  listUniqueId      = "c1337e3581",
	  mailchimpApiKey   ="e577a2d1e9b4d9d13ca14e87499f1b28";




router.post('/subscribe', function (req, res) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
				console.log("subscribe worked!");
              	res.status(204).send();
              } else {
				console.log("subscribe worked!")
              	res.status(204).send();
              }
          });
});





router.post("/register", (req, res) => {
	console.log("ting1");
	var newUser = new User({
		  username:"participant",
		  password:"DesignTrustBigHouseCollab2020"});
	console.log(newUser);
	User.register(newUser, newUser.password, function(err, user) {
		if(err) {
			console.log(err);
			res.redirect("/");
		} else {
			passport.authenticate("local")(req, res, function() {
			  console.log("success");
			});
		}
	});
	passport.authenticate("local");
	res.redirect("/events");
});

router.post("/participantRegister", (req, res) => {
	console.log("ting2");
	let newParticipant = new Participant({
		username:"participant2",
		password:"DesignTrustBigHouseCollab2020"});
	console.log(newParticipant);
	Participant.register(newParticipant, newParticipant.password, function(err, user) {
		if(err) {
			console.log(err);
			res.redirect("/");
		} else {
			passport.authenticate("local")(req, res, function() {
			  console.log("success");
			});
		}
	});
});

//show login form

router.get("/login", (req, res) => {
	res.render("admin/login");
});

//handling login logic

router.post("/admin", passport.authenticate("local", 
	{
		successRedirect: "/admin",
		failureRedirect: "/login"
	}), (req,res) => {

});

// show password form

router.get("/passwordCheck", (req, res) => {
	res.render("admin/passwordCheck");
});

// handling password logic

router.post("/passwordCheck", passport.authenticate("local", 
	{
		successRedirect: "/design-trust-resources",
		failureRedirect: "/passwordCheck"
	}), (req,res) => {
});


//logout route

router.get("/logout", (req, res) => {
	req.logout();
	req.flash("success", "logged you out!");
	res.redirect("/events");
});



module.exports = router;
