function animals(heads, legs) {
   if (heads === 0 && legs === 0) return [0, 0]
   let chickens = legs / 2 - heads
   let cows = 2 * heads - legs / 2
   if (heads < 0 || legs < 0 || legs % 2 || cows < 0 || chickens < 0)
      return "No solutions"
   return [cows, chickens]
}
