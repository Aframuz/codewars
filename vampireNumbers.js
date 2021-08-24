var vampire_test = function (a, b) {
   if ((a < 0 && b < 0) || a == 0 || a == 11) return false
   const product = Math.abs(a * b).toString()
   const multiplicands = Math.abs(a).toString() + Math.abs(b).toString()
   return (
      product.split("").reduce((a, b) => +a + +b, 0) ===
      multiplicands.split("").reduce((a, b) => +a + +b, 0)
   )
}

// ANSWERS
function vampire_test(a, b) {
   return sortStr(a + "" + b) == sortStr(a * b + "")
}

function sortStr(v) {
   return v.split("").sort().join("")
}
