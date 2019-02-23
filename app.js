var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var flash = require("connect-flash");
var passportLocalMongoose = require("passport-local-mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");


// REQUIRING ROUTES
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var authRoutes = require("./routes/authentication");

// APP CONFIG

//seedDB(); // seed the database
mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
//mongoose.connect("mongodb+srv://LyndseyDuffield:h3roku!!@cluster0-ilhew.mongodb.net/yelp_camp?retryWrites=true");
console.log(process.env.DATABASEURL);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIG

app.use(require("express-session")({
    secret: "Layla is the cutest dog evaaa",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(authRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("THE YelpCamp SERVER IS RUNNING!"); 
});