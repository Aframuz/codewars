function swapValues(arr) {
   let temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp
}

//ANSWERS
function swapValues() {
   return arguments[0].reverse();
 }