function basicOp(operation, value1, value2){
   switch (operation) {
      case "+":
         return value1 + value2
         break;
      case "-":
         return value1 - value2
         break;
      case "*":
         return value1 * value2
         break;
      case "/":
         return value1 / value2
         break;
   }
}

//ANSWERS
function basicOp(o, a, b) {
   return eval(a+o+b);
 }