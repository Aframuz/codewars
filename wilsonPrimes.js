function amIWilson(p) {
   const wilson = (factorialize(p-1)+1)/(p*p)
   return Number.isInteger(wilson)
}

function factorialize(num) {
   if (num < 0) 
         return -1;
   else if (num == 0) 
       return 1;
   else {
       return (num * factorialize(num - 1));
   }
}

//ANSWERS
const amIWilson = p => [5, 13, 563].indexOf(p) > -1

function amIWilson(p) {
   function fact(x) {
     return x <= 1 ? 1 : x * fact(x-1);
   }
   
   return (fact(p-1) + 1) / (p*p) % 1 === 0;
 }