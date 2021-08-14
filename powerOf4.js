function powerOf4(n) {
   if (!Number.isInteger(n)) return false
   if (n === 1) return false
   for (let i = 0; i < n; i++) {
      if (Math.pow(4, i) === n) {
         return true
      }
   }
   return false
}

// ANSWERS
function powerOf4(n) {
   if (n < 4) return false
   while (n >= 4) n /= 4
   return n === 1
}
//
function powerOf4(n) {
   return n > 0 && !isNaN(n) && !(n % 4)
}
