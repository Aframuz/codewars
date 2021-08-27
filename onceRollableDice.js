class Character {
   constructor(name, opness) {
      this.name = name
      this.opness = opness
   }

   attack() {
      return this.opness + Math.random() * 20 + 1
   }
}

// ASNWERS
function Character(name, opness) {
   this.name = name
   this.opness = opness
}

Character.prototype.attack = function () {
   return this.opness + ~~(Math.random() * 20) + 1
}

//
class Character {
   constructor(name, opness) {
      Object.assign(this, { name, opness })
   }

   attack() {
      return this.opness + ~~(Math.random() * 20) + 1
   }
}
