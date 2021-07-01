const numbers = function (...numbers) {
   for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") {
         return false
      }
   }
   return true
}

// ANSWERS
function numbers() {
   return [].every.call(arguments, function (value) {
      return typeof value === "number"
   })
}
