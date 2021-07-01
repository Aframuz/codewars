// ANSWERS
function triangular(n) {
   return n > 0 ? (n * n + n) / 2 : 0
}

function triangular(n) {
   var sum = 0
   for (i = 0; i <= n; i++) {
      sum += i
   }
   return sum
}
