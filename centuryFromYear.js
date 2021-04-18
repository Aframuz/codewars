function century(year) {
   if(year % 100 === 0){ 
      return year / 100
   } else {
      return Math.floor(year/100) + 1
   }
}

//ANSWERS
const century = year => Math.ceil(year/100)

function century(year) {
   return (year + 99) / 100 | 0;
 }