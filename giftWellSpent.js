var buy = function (c, arr) {
   let result = []
   let one = 0
   let two = 0
   for (let i = 0; i < arr.length; i++) {
      one = arr[i]
      for (let j = 0; j < arr.length; j++) {
         two = arr[j]
         if (one + two === c && i !== j) {
            result.push(i, j)
            return result
         }
      }
   }
   return null
}
