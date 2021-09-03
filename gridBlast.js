function fire(x, y) {
   let wai = { 0: "left", 1: "middle", 2: "right" }
   let ex = { 0: "top", 1: "middle", 2: "bottom" }
   if (x == 1 && y == 1) return "center"
   return `${ex[y]} ${wai[x]}`
}

// ANSWERS

function fire(x, y) {
   return grid[x + 3 * y]
}
