function myParseInt(str) {
   console.log(str)
   let strplus = +str
   if (str.includes("x")) return NaN
   if (str.toString().includes(".")) return NaN
   if (Number.isInteger(strplus)) return strplus
   else return NaN
}

// ANSWERS
function myParseInt(str) {
   return /^\s*\d+\s*$/.test(str) ? +str : NaN
}
