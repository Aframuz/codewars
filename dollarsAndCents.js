function formatMoney(amount){
   let numberStr = amount.toString()
   if(!numberStr.includes(".")){
      return `$${numberStr}.00`
   } else  {
      return `$${numberStr.padEnd(numberStr.indexOf(".")+3, "0")}`
   } 
}

//ANSWERS
function formatMoney(amount){
   return '$' + amount.toFixed(2);
 }