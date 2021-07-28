function sum() {
   var sum = 0
   for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number" && Number.isInteger(arguments[i])) {
         sum += arguments[i]
      }
   }
   return sum
}
