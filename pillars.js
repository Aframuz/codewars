function pillars(num_pill, dist, width) {
   let formula = (num_pill - 1) * dist * 100 + (num_pill - 2) * width
   return formula > 0 ? formula : 0
}
