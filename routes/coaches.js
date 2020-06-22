const express    = require("express"),
	  router     = express.Router(),
	  middleware = require("../middleware"); //if you leave it as a directory path it will automatically look for an index.js file.

router.get("/coaches", (req, res) => {
	res.render("coaches");
});

module.exports = router;