/* setup steps
 * 1. git init
 * 1. touch .gitignore
 * 1. npm init  # creates package.json
 * 1. npm install --save express # adds express dependency
 * 1. npm install --save mongoose
 */

/* models/index.js */
// module.exports.Unicorn = require("./unicorn.js")

/* models/unicorn.js */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wow-unicorns-app");

var Schema = mongoose.Schema;

var unicornSchema = new Schema({
  name: String,
  sparkles: Boolean,
  number_of_horns: {
    type: Number,
    default: 1
  }
});

var Unicorn = mongoose.model("Unicorn", unicornSchema);
module.exports = Unicorn;

/* index.js --- server.js */
var express = require("express");
var app = express();

// var db = require("./models")
// var Unicorn = db.Unicorn;

// app.use(express.static("public"));

app.get("/api/unicorns", function index(req, res){
  Unicorn.find({}, function(err, unicorns){
    res.send(unicorns); // all the unicorns
  });
})

app.get("/api/unicorns/:id", function show(req, res){
  var id = req.params.id;
  Unicorn.findOne({_id: id}, function(err, unicorn){
    res.send(unicorn); // one unicorn
  });
})

app.post("/api/unicorns", function create(req, res){
  res.send({});  // one newly created unicorn
})

app.delete("/api/unicorns/:id", function destroy(req, res){
  res.sendStatus(204); // just saying we did it
})

app.put("/api/unicorns/:id", function update(req, res){
  res.send({}) // one updated unicorn
})

app.listen(3000, function(){
  console.log("Server running on port: localhost:3000");
});

/* files */
/* files */
/* files */
/* files */
