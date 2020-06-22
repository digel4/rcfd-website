const express    = require("express"),
	  router     = express.Router(),
	  Event      = require("../models/event"),
	  middleware = require("../middleware"); //if you leave it as a directory path it will automatically look for an index.js file.


//===================================
//INDEX -show all Events
//===================================
router.get("/events", (req, res) => {
	// Get all events from DB
	Event.find({longDate: {$gte: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			var sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
			});
			res.render("events/index", {events:sortedArray});
		}
	})
});



router.get("/pastevents", (req, res) => {
	// Get all events from DB
	Event.find({longDate: {$lt: new Date()}}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			var sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
			});
			res.render("events/pindex", {events:sortedArray})
		}
	})
});

router.get("/admin", middleware.isLoggedIn, (req, res) => {
	res.render("admin/admin");
});



router.get("/admin/new", (req, res) => {
	res.render("admin/new");
});

router.get("/admin/events", (req, res) => {
	// Get all events from DB
	Event.find({}, (err, allEvents) => {
		if (err) {
			console.log(err);
		} else {
			var sortedArray = allEvents.sort((a, b) => {
      			return new Date(a.longDate) - new Date(b.longDate);
			});
	res.render("admin/events", {events:sortedArray});
}})});

//CREATE - add new event to DB
// middleware.isLoggedIn,

router.post("/admin/new", (req, res) => {
	const shortOption= {day: '2-digit', month: 'short'}
	// get data from form and add to campground array
	var name = req.body.name;
	// var longDate = new Date(req.body.date).toLocaleString('en-GB', longOption);
	var longDate = req.body.date;
	var shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption);
	var image = req.body.image;
	var description = req.body.description;
	// var author  = {
	// 	id: req.user._id,
	// 	username: req.user.username
	// }
	var endTime = req.body.endTime;
	var startTime = req.body.startTime;
	var businessName = req.body.businessName;
	var streetNumber = req.body.streetNumber;
	var streetName = req.body.streetName;
	var city = req.body.city;
	var postcode = req.body.postcode;
	var eventURL = req.body.eventURL;
	var excerpt = req.body.excerpt;
	var newEvent = {name: name, longDate: longDate, shortDate: shortDate, image: image, description: description, endTime: endTime, startTime: startTime, businessName: businessName, streetNumber:streetNumber, streetName: streetName, city: city, postcode: postcode, eventURL: eventURL, excerpt: excerpt  };
	//Create a new event and save to DB
	Event.create(newEvent, (err, newlyCreated) => {
		if (err) {
			console.log(err)
		} else {
			//redirect back to events page
			console.log(newlyCreated);
			res.redirect("/events");
			console.log("added to database");
		}
	})
});

// NEW - show form to create new events
// middleware.isLoggedIn




//SHOW - shows more info about one event
router.get("/:id", (req, res) => {
	//find the event with provided id
	Event.findById(req.params.id, (err, foundEvent) => {
		if (err) {
			console.log(err)
		} else {
			console.log(foundEvent);
			const longOption= {weekday: "long", day: '2-digit', month: 'long', year: "numeric"};
			var longDate = new Date(foundEvent.longDate).toLocaleString('en-GB', longOption);
				//render show template with that event
			res.render("events/show", {event: foundEvent, longDate:longDate});
		}
	});
});

// EDIT EVENT ROUTE

router.get("/:id/edit", (req,res) => {
	Event.findById(req.params.id, (err, foundEvent) => {
		res.render("admin/edit", {event: foundEvent});
	});
});


// UPDATE EVENT ROUTE

router.put("/:id", (req,res) => {
	//find and update the correct campround
	const shortOption= {day: '2-digit', month: 'short'};
	 Event.findByIdAndUpdate(req.params.id, req.body.event, (err, updatedEvent) => {
		 updatedEvent.shortDate = new Date(req.body.date).toLocaleString('en-GB', shortOption); 
		 updatedEvent.longDate = req.body.date;
		 updatedEvent.save();
		if(err) {
			res.redirect("/events");
		} else {
			res.redirect("/admin/events");
		}
	});
});

// DESTROY EVENT ROUTE

router.delete("/:id", (req, res) => {
	// res.send("you have reached the delete route");
	Event.findByIdAndRemove(req.params.id, (err) => {
		if(err) {
		res.redirect("/admin/events")
	} else {
		res.redirect("admin/events")
	}
	});
});


module.exports = router;