const Person = function(){
   const person = {
     _name: "Leroy",
     _friends: [],
     fillFriends(f) {
        this._friends.push(...f)
      }
   }
   return person;
}

//ANSWERS
var Person = function(){
   var person = {
     _name: "Leroy",
     _friends: [],
     fillFriends(f) { 
        this._friends = f; 
      }
   }
   return person;
 }