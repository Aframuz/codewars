function sumOfN(n) {
   let y = 0
   let arr = []
   if (n > 0) {
      for (let i = 0; i <= n; i++) {
         arr.push(i)
      }
   } else {
      for (let i = 0; i >= n; i--) {
         arr.push(i)
      }
   }
   return arr.map((d) => (y += d))
}
