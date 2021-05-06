class Guesser {
   constructor(number, lives) {
     this.number = number;
     this.lives = lives;
   }
   
   guess(n) {
      if(this.lives === 0) {
         throw new Error('error already dead')
      }
     if(n === this.number) {
        return true
     } else {
        this.lives -= 1
     }
   }
}