const express        = require ("express"),
	  app            = express(),
	  body           = require("body-parser"),
	  mongoose       = require("mongoose"),
	  flash          = require("connect-flash"),
	  passport       = require("passport"),
	  LocalStrategy  = require("passport-local"),
	  methodOverride = require("method-override"),
	  Event          = require("./models/event"),
	  User           = require("./models/user"),
	  Participant    = require("./models/participant"),
	  seedDB         = require("./seeds");


//requiring routes
const eventRoutes            = require("./routes/events"),
	  indexRoutes            = require("./routes/index"),
	  experimentorRoutes     = require("./routes/experimentor"),
	  adminRoutes            = require("./routes/admin"),
	  coachesRoutes          = require("./routes/coaches"),
	  resourcesRoutes        = require("./routes/resources"),
	  designTrustRoutes      = require("./routes/designTrust");
	  



// mongoose.connect('mongodb://localhost:27017/rcf-v3', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://admin:hello@cluster0.e4jqp.mongodb.net/rcf-d?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }).then(() => {
	console.log("connected to DB");
}).catch(err => {
	console.log('ERROR triggered:', err.message)
});

app.use(body.urlencoded({limit: '10mb',extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/jHtmlArea"));
app.use(methodOverride("_method"));
app.use(flash());


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

// passport.use(new LocalStrategy(User.authenticate())); //this coresponds to the middleware used later on on login

passport.use('local', new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

app.use( (req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


// Routes

app.use(indexRoutes);
app.use(adminRoutes);
app.use(coachesRoutes);
app.use(resourcesRoutes);
app.use(designTrustRoutes);
// I need to recode the EventsRoutes since all events are currently /:id which means any routes file after the eventRoutes here will not load properly since they will be /pageName which the app thinks is an event ID
app.use(eventRoutes);

// app.use(experimentorRoutes);





app.listen(3000, () => {
 	console.log("server listening on port 3000");
 });

// app.listen(process.env.PORT, process.env.IP);