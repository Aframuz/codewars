function powersOfTwo(n) {
   let arr = []
   for (let i = 0; i <= n; i++) {
      let power = 2 ** i
      arr.push(power)
   }
   return arr
}
