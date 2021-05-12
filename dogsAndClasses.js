// DONT KNOW
class Labrador extends Dog {
   constructor(name, age, gender, master) {
      super(name, age, gender, master)
      this.species = "Labrador"
      this.size = "Large"
      this.master = master
      this.loyal = true
   }
}

// ANSWERS
class Labrador extends Dog {
   constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true)
   }
}
