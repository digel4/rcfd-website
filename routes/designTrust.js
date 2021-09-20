const express    = require("express"),
	  router     = express.Router(),
	  middleware = require("../middleware"); //if you leave it as a directory path it will automatically look for an index.js file.

router.get("/design-trust-resources", middleware.passwordCheck, (req, res) => {
	res.render("designTrust");
});

module.exports = router;

