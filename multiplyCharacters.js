function spam(number) {
   return "hue".repeat(number)
}

//ANSWERS
function spam(number) {
   return Array(++number).join("hue")
}
