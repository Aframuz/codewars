function addLength(str) {
   return str.split(" ").map(letter => letter + " " + letter.length)
}
   