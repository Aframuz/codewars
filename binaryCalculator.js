function calculate(n1, n2, o) {
   let number1 = +parseInt(n1, 2)
   let number2 = +parseInt(n2, 2)
   let result = 0

   switch (o) {
      case "add":
         result = number1 + number2
         break
      case "subtract":
         result = number1 - number2
         break
      case "multiply":
         result = number1 * number2
         break
   }

   return result.toString(2)
}
