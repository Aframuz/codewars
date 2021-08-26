function pairZeros(arr) {
   let arr1 = [...arr]
   let arr2 = []
   for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
         if (i < j) {
            if (arr1[i] === 0 && arr1[j] === 0 && !arr2.includes(i)) {
               arr2.push(i)
               arr1.splice(j, 1)
            }
         }
      }
   }
   return arr1
}

// ANSWERS
function pairZeros(arr) {
   var seenZero = 0
   return arr.filter(function (num) {
      return num != 0 || seenZero++ % 2 == 0
   })
}
