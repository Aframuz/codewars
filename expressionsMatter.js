function expressionMatter(a, b, c) {
   let a1 = a + b + c
   let a2 = (a + b) * c
   let a3 = a + b * c
   let a4 = a * b + c
   let a5 = a * (b + c)
   let a6 = a * b * c
   return Math.max(a1, a2, a3, a4, a5, a6)
}
