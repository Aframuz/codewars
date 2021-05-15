// ANSWERS
function isDigit(s) {
   return s == parseFloat(s)
}

const isDigit = (s) => /^-?\d+(\.\d+)?$/.test(s)
