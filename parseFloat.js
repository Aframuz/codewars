function parseF(s) {
   if (parseFloat(s) === 0) return parseFloat(s)
   if (!parseFloat(s)) {
      return null
   } else return parseFloat(s)
}

// ANSWERS
function parseF(s) {
   return isNaN(parseFloat(s)) ? null : parseFloat(s)
}
