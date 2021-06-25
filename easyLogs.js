function logs(x, a, b) {
   let loga = Math.log(a) / Math.log(x)
   let logb = Math.log(b) / Math.log(x)
   return loga + logb
}

//ANSWERS
function logs(x, a, b) {
   return Math.log(a * b) / Math.log(x)
}
