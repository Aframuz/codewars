function getNumberFromString(s) {
   let numb = s.match(/\d/g)
   return +numb.join("")
}

// ANSWERS
function getNumberFromString(s) {
   return +s.replace(/\D/g, "")
}
