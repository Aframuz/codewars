class Cube{
   constructor(number){
      this._number = number
   }

   getSide(){
      if(this._number) {
         return this._number
      } else {
         return 0
      }
   }

   setSide(n) {
      if(isNaN(n) === true) {
         return
      } else {
         this._number = Math.abs(n)
      }
   }
}

//ANSWERS
class Cube {
   constructor(side) {
     this.setSide(side)
   }
 
   getSide() {
     return this.side
   }
   
   setSide(side = 0) {
     this.side = Math.abs(side)
   }
 }