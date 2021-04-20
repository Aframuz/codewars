function NameMe(first, last) {
   this.firstName = first;
   this.lastName = last;
   this.name = this.firstName + ' ' + this.lastName
}

//ANSWERS
function NameMe(first, last) {
   this.firstName = first;
   this.lastName  = last;
   this.name = first + ' ' + last;
}




class NameMe{
   constructor(first, last){
      this._firstName = first
      this._lastName = last
   }
   get firstName(){
      return this._firstName
   }
   get lastName(){
      return this._lastName
   }
   name(){
      return this._firstName + ' ' + this._lastName
   } 
}