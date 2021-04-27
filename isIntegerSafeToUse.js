function SafeInteger(n) {
   maxInteger = Math.pow(2,53)
   if(n>-(maxInteger) && n<maxInteger){
      return true
   } else {
      return false
   }
}

//ANSWERS
function SafeInteger(n) {
   return Number.isSafeInteger(n);
 }