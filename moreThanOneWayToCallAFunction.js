function sum(a, b) {
   const fn = function (b) {
      return a + b
   }
   if (typeof b == "undefined") {
      return fn
   } else {
      return fn(b)
   }
}
