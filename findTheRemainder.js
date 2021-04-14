function remainder(a, b){
   if (Math.min(a, b) === 0) {
      return NaN
   } else {
      return (a < b) ? b % a : a % b
   }
}