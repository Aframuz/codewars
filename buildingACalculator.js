const Calculator = {
   add: function (n1, n2) {
      return n1 + n2
   },
   subtract: function (n1, n2) {
      return n1 - n2
   },
   multiply: function (n1, n2) {
      return n1 * n2
   },
   divide: function (n1, n2) {
      if (!n2) return false
      return n1 / n2
   },
}

// ANSWERS
var Calculator = {}

Calculator.add = function (a, b) {
   return a + b
}
Calculator.subtract = function (a, b) {
   return a - b
}
Calculator.multiply = function (a, b) {
   return a * b
}
Calculator.divide = function (a, b) {
   return !b ? false : a / b
}
