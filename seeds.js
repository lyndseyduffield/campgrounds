var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment."
        },
        {
            name: "Desert Mesa",
            image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment."
        },
        {
            name: "Forest Floor",
            image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment."
        }
    ];

function seedDB() {
    Campground.remove({}, function(err){
         if(err) {
        console.log(err);
        } else {
        console.log("removed campgrounds!");
        }
            // add a few camprgrounds
//         data.forEach(function(seed){
//               Campground.create(seed, function(err, campground){
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log("added campgrounds!");
//                 } 
//                 // add a few comments
//                 Comment.create({
//                     text: "This place is great, but I wish there were internet",
//                     author: "Homer"
//                 }, function(err, comment) {
//                         if(err) {
//                             console.log(err);
//                         } else {
//                             console.log("comment has been posted!");
//                             campground.comments.push(comment);
//                             campground.save();
//                         }
//                     });
//                 });
//             });
         });
 }

module.exports = seedDB;