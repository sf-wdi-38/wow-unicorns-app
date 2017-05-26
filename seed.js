var db = require("./models");

var unicorn_data = [
  {
    name: "ralph",
    sparkles: false,
    number_of_horns: 1
  },
  {
    name: "stuart",
    sparkles: true,
    number_of_horns: 1
  },
  {
    name: "horse",
    sparkles: false,
    number_of_horns: 0
  }
]

db.Unicorn.remove({}, function youHavedestroyedAllTheUnicorns(){

  db.Unicorn.create(unicorn_data, function hereAreMagnificientUnicorns(err, unicorns){
    if (err) { return console.log(err); }
    console.log(`Created ${unicorns.length} unicorns!`);
  });

});

