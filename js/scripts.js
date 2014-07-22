var Tamagochi = {
  initialize: function(name) {
  this.name = name;
  this.foodLevel = 100;
  this.sleepLevel = 100;
  this.activityLevel = 100;
  },
  timePasses: function(){
  this.foodLevel = this.foodLevel - 1;
  this.sleepLevel = this.sleepLevel - 1;
  this.activityLevel = this.activityLevel - 1;
  },
  isAlive: function(){
    return this.foodLevel > 0
  },
};

$(document).ready(function() {
  $("form#tam-name").submit(function(event) {
    event.preventDefault();
    var myPet = $("#name").val();
    var tamagochi = Object.create(Tamagochi)
    tamagochi.initialize(name)
    tamagochi.name = myPet;
    $("#name-output").text(myPet);


    var intervalID = setInterval(function() {
      tamagochi.timePasses();
      $("#food").text(tamagochi.foodLevel);
      $("#sleep").text(tamagochi.sleepLevel);
      $("#activity").text(tamagochi.activityLevel);
      if (tamagochi.foodLevel < 1 || tamagochi.sleepLevel < 1 || tamagochi.activityLevel < 1) {
        alert("gary died");
        clearInterval(intervalID);
      }
    }, 1000);

    $("#feed-tama").click(function(event) {
      $("#food").text(tamagochi.foodLevel += 1);
    });
    $("#sleep-tama").click(function(event) {
      $("#sleep").text(tamagochi.sleepLevel += 1);
    });
    $("#activity-tama").click(function(event) {
      $("#activity").text(tamagochi.activityLevel += 1);
    });

  });
});
