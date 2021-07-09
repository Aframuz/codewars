var Calculator = {
   average: function (...numbers) {
      if (numbers.length === 0) return 0
      let sum = 0
      for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i]
      }
      return sum / numbers.length
   },
}

// ANSWERS
var Calculator = {
   average: function () {
      return (
         Array.prototype.slice.call(arguments).reduce(function (prev, next) {
            return prev + next
         }, 0) / (arguments.length || 1)
      )
   },
}
