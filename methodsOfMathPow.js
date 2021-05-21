function cutCube(volume, n) {
   return !Number.isInteger(Math.cbrt(volume)) ||
      !Number.isInteger(Math.cbrt(volume / n))
      ? false
      : true
}

// ANSWERS
function cutCube(volume, n) {
   return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1)
}
