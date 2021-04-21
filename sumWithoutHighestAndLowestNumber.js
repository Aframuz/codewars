function sumArray(array) {
   let sum = 0
   if(array && array.length > 1){
      highest = Math.max(...array)
      lowest = Math.min(...array)
      sum = array.reduce((acc,cVal) => acc + cVal, 0) - highest - lowest
   }
   return sum
}

//ANSWERS
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0