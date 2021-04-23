const repeatIt = function(str, n) {
   if(typeof(str) !== "string") {
      return "Not a string"
   } else {
      return str.repeat(n)
   }
}

//ANSWERS 
const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'

const repeatIt = function(str, n) {
   return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
}