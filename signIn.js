function sign(number) {
   if (!isNaN(number)) {
      return number > 0 ? 1 : number < 0 ? -1 : 0
   }
   return NaN
}
