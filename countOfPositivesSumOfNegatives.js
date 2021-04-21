function countPositivesSumNegatives(input) {
   let arr = []
   let negativeArr = []
   let counter = 0

   if(input && input.length !== 0){
 
         input.forEach(number => {
            if(number > 0) {
               counter++
            } else{
               negativeArr.push(number)
            }
         });
      
         const negativeReduced = negativeArr.reduce((acc, cVal) => acc + cVal, 0)

         arr = [counter, negativeReduced]
      }
   
   return arr
}

//ANSWERS
function countPositivesSumNegatives(input) {
   if (input == null || input.length == 0)
     return [];
   
   var positive = 0;
   var negative = 0;
   
   for (var i=0, l=input.length; i<l; ++i)
   {
     if (input[i] > 0)
       ++ positive;
     else
       negative += input[i];
   }
   
   return [positive, negative];
}

function countPositivesSumNegatives(input) {
   return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}