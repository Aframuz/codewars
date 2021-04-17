class Ball {
   constructor(ballType){
      this._ballType = ballType
   }
   get ballType(){
      return this._ballType ? "super" : "regular"
   }
}

//ANSWERS 
var Ball = function(ballType) {
   this.ballType = ballType || 'regular'
}

class Ball {
   constructor(ballType = "regular") {
      this.ballType = ballType
   }
}