function fizzbuzz(n) {
   let arr = []
   for (let i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
         arr.push("FizzBuzz")
      } else if (i % 3 == 0) {
         arr.push("Fizz")
      } else if (i % 5 == 0) {
         arr.push("Buzz")
      } else {
         arr.push(i)
      }
   }
   return arr
}

// ANSWERS
var fizzify = (fizzbuzz = function (n) {
   return Array.apply(null, new Array(n)).map(function (e, i) {
      return (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i
   })
})
