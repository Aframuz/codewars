class Person {
   constructor(name, age) {
      this._name = name
      this._age = age
      this.info = `${this._name}s age is ${this._age}`
   }
}

//ANSWERS 
class Person {

   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
   
   get info() {
     return `${this.name}s age is ${this.age}`;
   }
   
 }