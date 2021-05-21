function first(arr, n) {
   console.log(n)
   let arr2 = []
   if (n === 0) return arr2
   else if (!n) {
      arr2.push(arr[0])
      return arr2
   }

   if (n > arr.length) n = arr.length
   for (let i = 0; i < n; i++) {
      arr2.push(arr[i])
   }
   return arr2
}

// ANSWERS
function first(arr, n = 1) {
   return arr.slice(0, n)
}
