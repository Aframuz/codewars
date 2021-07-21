// - n and d will be positive integers, and also n > d. No need to check any of that
function factorialDivision(n, d) {
   let num = 1
   for (let i = n; i >= n - d; i--) {
      num = num * i
   }
   return num
}

// ANSWERS
function factorialDivision(n, d) {
   var x = 1
   for (var i = 0; i < n - d; i++) {
      x *= n - i
   }
   return x
}
