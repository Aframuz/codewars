function roundIt(n) {
   let nStr = n.toString().split(".")
   if (nStr[0].length > nStr[1].length) {
      return Math.floor(n)
   } else if (nStr[0].length < nStr[1].length) {
      return Math.ceil(n)
   } else return Math.round(n)
}

// ANSWERS
function roundIt(n) {
   var [a, b] = n.toString().split(".")
   return a.length > b.length
      ? Math.floor(n)
      : a.length === b.length
      ? Math.round(n)
      : Math.ceil(n)
}
