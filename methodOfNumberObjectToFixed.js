function howManySmaller(arr, n) {
   arr = arr.map((n) => +n.toFixed(2))
   return arr.filter((number) => number < n).length
}

// ANSWERS
function howManySmaller(arr, n) {
   return arr.filter((x) => +x.toFixed(2) < n).length
}
