const express    = require("express"),
	  router     = express.Router(),
	  Experimentor = require("../models/experimentor"),
	  middleware = require("../middleware"); //if you leave it as a directory path it will automatically look for an index.js file.


//===================================
//INDEX -show all Experimentors
//===================================
router.get("/", (req, res) => {
	// Get all events from DB
	//Experimentor.find({}, (err, allExperimentors) => {
	//	if (err) {
	//		console.log(err);
	//	} else {
			res.render("experimentor/index") //,{experimentors:allExperimentors}
		}
//	})
//}
);



module.exports = router;