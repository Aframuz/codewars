function span(arr, predicate) {
   if (arr.length == 0) return [[], []]
   let arr1 = []
   let i = 0
   while (predicate(arr[i])) {
      if (i >= arr.length) break
      arr1.push(arr[i])
      i++
   }
   let arr2 = arr.slice(i)
   return [arr1, arr2]
}
