var isSquare = function (n) {
   if (n === 0 || n === 1) return true
   for (let i = 0; i < n / 2 + 1; i++) {
      if (i * i === n) return true
   }
   return false
}

// ANSWERS
function isSquare(n) {
   return Math.sqrt(n) % 1 === 0
}
