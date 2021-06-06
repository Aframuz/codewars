class Person {
   constructor(name) {
      this._name = name
   }

   get name() {
      return this._name
   }

   greet(namae) {
      return `Hello ${namae}, my name is ${this._name}`
   }
}

// ANSWERS
function Person(name) {
   this.name = name
}

Person.prototype.greet = function (yourName) {
   return "Hello " + yourName + ", my name is " + this.name
}
