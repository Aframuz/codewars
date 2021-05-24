var hotpo = function (n) {
   let total = 0
   if (n == 1) return 0 //Optional Handler to n = 0
   while (n !== 1) {
      if (!(n % 2)) {
         n /= 2
      } else {
         n = 3 * n + 1
      }
      total++
   }
   return total
}
