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
   return [arr2]
}

// ANSWERS
function dropWhile(arr, pred) {
   for (var i = 0; i < arr.length && pred(arr[i]); ++i);
   return arr.slice(i)
}
