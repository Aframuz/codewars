const numbers = function (...numbers) {
   for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers !== "number") {
         return false
      }
   }
   return true
}
