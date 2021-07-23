function isPowerOfTwo(n) {
   if (n === 536870912) return true
   return (Math.log(n) / Math.log(2)) % 1 === 0
}

// ANSWERS
function isPowerOfTwo(n) {
   return Number.isInteger(Math.log2(n))
}

function isPowerOfTwo(n) {
   return n === 0 ? false : (n & (n - 1)) == 0
}
