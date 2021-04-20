function Dog (breed) {
   this.breed = breed
   this.bark = function() {
      return "Woof"
   }
}
const snoopy = new Dog("Beagle")
const scoobydoo = new Dog("Great Dane")


//ANSWERS
function Dog (breed) {
   this.breed = breed;
}
var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
   return "Woof";
};

var scoobydoo = new Dog("Great Dane");