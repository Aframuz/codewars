function lovefunc(flower1, flower2){
   if(flower1 % 2 === 0){
      if(flower2 % 2 !==0){
         return true
      }
   }
   if(flower2 % 2 === 0){
      if(flower1 % 2 !==0){
         return true
      }
   }
   return false
}

//ANSWERS
function lovefunc(flower1, flower2){
   return flower1 % 2 !== flower2 % 2;
 }

 function lovefunc(flower1, flower2){
   return (flower1 + flower2) % 2 === 1
 }