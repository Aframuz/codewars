function sumMul(n, m) {
   let arr = []
   for (let i = 1; i < m; i++) {
      if (i % n === 0) {
         arr.push(i)
      }
   }
   if (arr.length === 0) return "INVALID"
   else return arr.reduce((acc, cVal) => acc + cVal, 0)
}
