function startingMark(bodyHeight) {
   const mark = (1.22 / 0.31) * (bodyHeight - 1.52) + 9.45
   return +mark.toFixed(2)
}
