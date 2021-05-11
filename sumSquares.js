function sumSquares(array) {
   return array
      .map((number) => number ** 2)
      .reduce((acc, cVal) => acc + cVal, 0)
}

// ANSWERS
let sumSquares = (a) => a.reduce((s, x) => s + x * x, 0)
