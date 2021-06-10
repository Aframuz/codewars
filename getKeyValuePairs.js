function keysAndValues(data) {
   let arr1 = []
   let arr2 = []
   Object.keys(data).map((key) => arr1.push(key))
   Object.keys(data).map((key) => arr2.push(data[key]))
   return [arr1, arr2]
}

// ANSWERS
function keysAndValues(data) {
   return [Object.keys(data), Object.values(data)]
}
