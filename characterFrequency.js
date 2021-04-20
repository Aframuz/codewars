function charFreq(message) {
   let obj = {}
   for(let i = 0; i < message.length; i++) {
         arr[message[i]] = message.split(message[i]).length-1   
   }
   return obj
}

//ANSWERS
function charFreq(message) {
   return message.split('').reduce(function(acc, cur) {
     return (acc[cur] = (acc[cur] || 0) + 1) && acc;
   }, {});
 }