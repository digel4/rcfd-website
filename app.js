const express       = require ("express"),
	  app           = express(),
	  body          = require("body-parser"),
	  mongoose      = require("mongoose"),
	  flash         = require("connect-flash"),
	  passport      = require("passport"),
	  LocalStrategy = require("passport-local"),
	  methodOverride= require("method-override"),
	  Event    = require("./models/event"),
	  User          = require("./models/user"),
	   seedDB        = require("./seeds");

	  


//requiring routes
const eventRoutes       = require("./routes/events"),
	  indexRoutes            = require("./routes/index"),
	  experimentorRoutes     = require("./routes/experimentor");



// mongoose.connect('mongodb://localhost:27017/rcf-v3', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://RCF-D:uDyXN7YTgxBxw06V@rcfdb-qf8zg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }).then(() => {
	console.log("connected to DB");
}).catch(err => {
	console.log('ERROR:', err.message)
});

app.use(body.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/jHtmlArea"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//==============================
// PASSPORT CONFIGURATION
//==============================

app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //this coresponds to the middleware used later on on login
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use( (req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use(eventRoutes);
app.use(experimentorRoutes);



app.listen(3000, () => {
	console.log("server listening on port 3000");
});
