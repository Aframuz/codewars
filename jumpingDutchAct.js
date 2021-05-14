function sc(floor) {
   let scream = "Aa~ "

   if (floor <= 1) {
      return ""
   } else if (floor <= 6) {
      return `${scream.repeat(floor - 1)}Pa! Aa!`
   } else {
      return `${scream.repeat(floor - 1)}Pa!`
   }
}

// ANSWERS
function sc(floor) {
   if (floor <= 1) return ""

   return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "")
}
