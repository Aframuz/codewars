function convertBits(a, b) {
   let minBit = Math.min(a, b).toString(2)
   let maxBit = Math.max(a, b).toString(2)
   minBit = minBit.padStart(maxBit.length, 0)
   let sum = 0

   for (let i = 0; i < maxBit.length; i++) {
      if (minBit[i] !== maxBit[i]) {
         sum += 1
      }
   }
   return sum
}

//ANSWERS
function convertBits(a, b) {
   var x = a ^ b,
      count = 0
   do {
      count += x & 1
   } while ((x >>= 1))
   return count
}

//
function convertBits(a, b) {
   return ((a ^ b).toString(2).match(/1/g) || []).length
}
