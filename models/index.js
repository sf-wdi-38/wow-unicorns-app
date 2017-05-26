var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wow-unicorns-app");

module.exports.Unicorn = require("./unicorn.js")
