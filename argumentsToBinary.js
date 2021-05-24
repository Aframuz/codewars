function arr2bin(arr) {
   console.log(arr)
   let total = 0
   arr.forEach((e) => {
      if (typeof e === "number") total += e
   })
   return total.toString(2)
}

// ANSWERS
function arr2bin(arr) {
   return arr
      .reduce((x, y) => x + (typeof y == "number" ? y : 0), 0)
      .toString(2)
}
