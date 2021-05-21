function bigToSmall(arr) {
   let result = [].concat(...arr)
   result.sort((a, b) => b - a)
   return result.join(">")
}
