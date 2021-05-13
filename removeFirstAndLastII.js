function array(str) {
   if (str.length < 5) return null
   let arr = str.split(",")
   arr.pop()
   arr.shift()
   return arr.join(",")
}

// ANSWERS
function array(arr) {
   return arr.split(",").slice(1, -1).join(" ") || null
}
