// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
mongoose.connect('mongodb://localhost/athlete');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models
var Profile = mongoose.model('Profile', {
    title: String,
    description: String,
    rating: Number
});
 
// Routes
 
    // Get profiles
    app.get('/api/profiles', function(req, res) {
 
        console.log("fetching profiles");
 
        // use mongoose to get all profiles in the database
        Profile.find(function(err, profiles) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(profiles); // return all profiles in JSON format
        });
    });
 
    // create profile and send back all profiles after creation
    app.post('/api/profiles', function(req, res) {
 
        console.log("creating profile");
 
        // create a profile, information comes from AJAX request from Ionic
        Profile.create({
            name : req.body.name,
            dob : req.body.dob,
            weight: req.body.weight,
            height: req.body.height,
            done : false
        }, function(err, profile) {
            if (err)
                res.send(err);
 
            // get and return all the profiles after you create another
            Profile.find(function(err, profiles) {
                if (err)
                    res.send(err)
                res.json(profiles);
            });
        });
 
    });
 
    // delete a profile
    app.delete('/api/profiles/:profile_id', function(req, res) {
        Profile.remove({
            _id : req.params.profile_id
        }, function(err, profile) {
 
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");