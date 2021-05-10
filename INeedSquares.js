function squaresOnly(a) {
   let s = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
   return a.filter((n) => s.includes(n))
}

// ANSWERS
function squaresOnly(array) {
   return array.filter((n) => Number.isInteger(Math.sqrt(n)))
}
