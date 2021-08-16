function isPrime(n) {
   console.log(n)
   if (n === 0 || n === 1) return false
   for (let i = 2; i < Math.ceil(n / 2); i++) {
      if (n % i === 0) return false
   }
   return true
}
