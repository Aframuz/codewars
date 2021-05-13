function multiply(number) {
   let elev = 0
   if (number > 0) {
      elev = number.toString().length
   } else {
      elev = number.toString().length - 1
   }

   return number * 5 ** elev
}

// ANSWERS
function multiply(number) {
   return number * Math.pow(5, Math.abs(number).toString().length)
}
