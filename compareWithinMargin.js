function closeCompare(a, b, margin) {
   if (a === b) return 0
   if (Math.abs(a - b) <= margin) return 0
   if (a < b) return -1
   else return 1
}

// ANSWERS
function closeCompare(a, b, m = 0) {
   return Math.abs(a - b) <= m ? 0 : Math.sign(a - b)
}
