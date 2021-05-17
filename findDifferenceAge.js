function differenceInAges(ages) {
   ages = ages.sort((a, b) => a - b)
   return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]]
}

// ANSWERS
function differenceInAges(ages) {
   let max = Math.max(...ages),
      min = Math.min(...ages)
   diff = max - min

   return [min, max, diff]
}
