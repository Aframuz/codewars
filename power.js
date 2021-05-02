function numberToPower(number, power){
   let mult = number

   if(power === 0) return 1
   for (let i = 0; i < power ; i++) {
      number *= mult     
   }
   return number
}

//ANSWERS
function numberToPower(number, power){
   var total = 1;
   for (var i = 1; i <= power; i++) { 
     total = total * number;
   }
   return total;
 }