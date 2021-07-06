function reject(array, predicate) {
   let arr1 = array.filter(predicate)
   return array.filter((n) => !arr1.includes(n))
}

// ANSWERS
function reject(array, iterator) {
   return array.filter(function (x) {
      return !iterator(x)
   })
}
