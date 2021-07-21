function power(base, exponent) {
   let mult = 1
   if (exponent < 0) {
      for (let i = 0; i < exponent * -1; i++) {
         mult = mult * base
      }
      mult = 1 / mult
   } else if (exponent > 0) {
      for (let i = 0; i < exponent; i++) {
         mutl = mult * base
      }
   }
   return mult
}

// ANSWERS
function power(base, exponent) {
   let inv = exponent < 0
   let exp = Math.abs(exponent)
   let res = 1

   while (exp--) res *= base

   return inv ? 1 / res : res
}
