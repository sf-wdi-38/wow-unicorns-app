var express = require("express");
var app = express();

// app.use(express.static("public"));

/************
 * DATABASE *
 ************/

var db = require("./models")
var Unicorn = db.Unicorn;

/**********************
 * JSON API ENDPOINTS *
 **********************/

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

/**********
 * SERVER *
 **********/

app.listen(3000, function(){
  console.log("Server running on port: localhost:3000");
});
