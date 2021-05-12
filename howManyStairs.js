function stairsIn20(s) {
   total = 0
   s.forEach((day) => {
      total += day.reduce((acc, cVal) => acc + cVal, 0)
   })
   return total
}

// ANSWERS
function stairsIn20(a) {
   return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0)
}
