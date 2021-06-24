const drawStairs = (n) =>
   [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n")

// AMSWERS
function drawStairs(n) {
   let result = []

   for (let i = 0; i < n; i++) {
      result[i] = `${" ".repeat(i)}I`
   }

   return result.join("\n")
}
