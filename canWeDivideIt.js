function isDivideBy(number, a, b) {
   if (number % a === 0) {
      if (number % b === 0) {
         return true
      }
   }
   return false
}

// ANSWERS
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0
