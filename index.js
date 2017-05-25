/* setup steps
 * 1. git init
 * 1. touch .gitignore
 * 1. npm init  # creates package.json
 * 1. npm install --save express # adds express dependency
 * 1.
 */


/* index.js --- server.js */
var express = require("express");
var app = express();

// app.use(express.static("public"));

app.get("/api/unicorns", function index(req, res){
  res.send([]); // all the unicorns
})

app.get("/api/unicorns/:id", function show(req, res){
  //var id = req.params.id;
  res.send({}); // one unicorn
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
/* files */
