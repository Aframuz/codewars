function arrayPlusArray(arr1, arr2) {
   const reduceArray = (arr) => arr.reduce((acc,cVal) => acc + cVal, 0)
   return reduceArray(arr1) + reduceArray(arr2)
}

//ANSWERS
function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
 }