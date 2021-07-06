function calculate(num1, operation, num2) {
   if (operation === "+") {
      return num1 + num2
   } else if (operation === "-") {
      return num1 - num2
   } else if (operation === "*") {
      return num1 * num2
   } else if (operation === "/") {
      if (num2 === 0) return null
      return num1 / num2
   } else return null
}

// ANSWERS
function calculate(num1, operation, num2) {
   var ops = {
      "+": function (x, y) {
         return x + y
      },
      "-": function (x, y) {
         return x - y
      },
      "*": function (x, y) {
         return x * y
      },
      "/": function (x, y) {
         return y === 0 ? null : x / y
      },
   }
   return (
      ops[operation] ||
      function () {
         return null
      }
   )(num1, num2)
}
