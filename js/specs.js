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
});
