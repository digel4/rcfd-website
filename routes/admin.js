const express    = require("express"),
	  router     = express.Router(),
	  middleware = require("../middleware"), //if you leave it as a directory path it will automatically look for an index.js file.
	  Enrollee = require("../models/enrollee"),
	  nforce   = require("nforce");



router.get("/signup", middleware.isLoggedIn, (req,res) => {
	res.render("enrol")
});





//  middleware.isLoggedIn,


//======================================================================sign-up===================================================================================
//Show enrolment form



//handle enrolment logic




// router.post("/signup", (req, res) => {
// 	var acc = nforce.createSObject('Account');
// 		acc.set('Name', req.body.firstName);
// 		acc.set('Phone', '800-555-2345');
// 		acc.set('SLA__c', 'Gold');
// 		acc.set('Ethnicity__c', 'White');
// 		var org = nforce.createConnection({
// 	  clientId: '3MVG9tzQRhEbH_K0ErjsWHDgYbrB17IQ0dx3ZZm2dmSIBx4pmVYxplh7Mrm4YOMFjj3w7Ipd7Y7B9ranUQEvc',
// 	  clientSecret: '81C023BEBED3294AB1901A9E6BB631A41222E0242642A017516DF430790A57E9',
// 	  redirectUri: 'https://login.salesforce.com/services/oauth2/authorize',
// 	  mode: 'single'
// 	});
// 	// authenticate and return OAuth token
// 	org.authenticate({
// 	  username: 'rcf@brave-hawk-bq9e00.com',
// 	  password: 'GarryGarryGarry456'
// 	}, function(err, resp){
// 	  if (!err) {
// 		console.log('Successfully logged in! Cached Token: ' + org.oauth.access_token);

// 		  org.insert({ sobject: acc }, function(err, resp){
// 	  if(!err) {
// 		  console.log('It worked!');
// 	  } else {
// 		  console.log(err);
// 	  }
// 	});
// 	  }
// 	  if (err) console.log(err);
// 	});
// res.redirect("/events");
// });
	







module.exports = router;