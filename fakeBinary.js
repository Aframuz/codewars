function fakeBin(x){
   return x.split("").map(number => {
      if(number>=5){
         return number = 1
      } else {
         return number = 0
      }
   }).join("")
}

//ANSWERS
function fakeBin(x) {
   return x.split('').map(n => n < 5 ? 0 : 1).join('');
}