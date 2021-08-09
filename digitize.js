function digitize(n) {
   return n
      .toString()
      .split("")
      .map((number) => +number)
}

// ANSWERS
function digitize(n) {
   return String(n).split("").map(Number)
}
