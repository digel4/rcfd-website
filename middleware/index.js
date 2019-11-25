const Campground  = require("../models/event"),
	  Experimentor     = require("../models/experimentor");

// all the middleware goes here

const middlewareObj = {};

middlewareObj.checkEventOwnership = (req, res, next) => {
	if(req.isAuthenticated()) {
		Event.findById(req.params.id, (err, foundEvent) => {
			if(err){
				req.flash("error", "event not found");
				res.redirect("back");
			} else {
				//does user own event?
				if(foundEvent.author.id.equals(req.user._id)) { //req.user is a string and .author.id is a mongoose object so we have to use the in built .equals method to compare them
					next();
				} else {
					req.flash("error", "You don't have permission to do that");
					res.redirect("back");
				}
			}	
		});
	} else {
		req.flash("error", "You need to be logged in to do that")
		res.redirect("back");
	}
};

	
middlewareObj.isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		return next();
	} else {
		req.flash("error", "You need to be logged in to do that") //this has to be placed before the redirect for some reason
		res.redirect("/login");
}};

module.exports = middlewareObj