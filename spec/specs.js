describe("Tamagochi",function(){
  describe("initialize",function(){
    it("sets the name, life , activity and sleep",function(){
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.name.should.equal("dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });
  describe("timePasses",function(){
    it("decreases the amount of food the Tamagochi has left by 1",function(){
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
    });
  });
  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.isAlive().should.equal(true);
    });
    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagochi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });

  describe("feed", function() {
    it("feeds your tamagochi a predetermined amount", function() {
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.feed().should.equal(11);
    });
  });
  describe("sleep", function(){
    it("puts the tamagochi to sleep a predetermined ammount", function(){
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.sleep().should.equal(11);
    });
  });
  describe("run", function() {
    it("RUNS + 1", function() {
      var myPet = Object.create(Tamagochi);
      myPet.initialize("dragon");
      myPet.run().should.equal(11);
    });
  });
});
