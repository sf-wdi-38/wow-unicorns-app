var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unicornSchema = new Schema({
  name: String,
  sparkles: Boolean,
  number_of_horns: {
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Unicorn = mongoose.model("Unicorn", unicornSchema);

module.exports = Unicorn;
