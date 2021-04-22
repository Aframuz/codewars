function divide(weight){
   return weight !== 2 ? (weight - 2) % 2 === 0 : false 
}

//ANSWERS
function divide(weight){
   return weight > 2 && !(weight % 2);
}