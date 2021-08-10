function calculateProbability(n) {
   let days = 1
   for (let i = 0; i < n; i++) {
      days = days * (365 - i)
   }
   const probability = 1 - days / 365 ** n
   return +probability.toFixed(2)
}
