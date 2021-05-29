function isVow(a) {
   return a.map((number) => {
      if (
         number === 97 ||
         number == 101 ||
         number == 105 ||
         number == 111 ||
         number == 117
      ) {
         return (number = String.fromCharCode(number))
      } else return number
   })
}

// ANSWERS
function isVow(a) {
   for (var i = 0, l = a.length; i < l; ++i) {
      var char = String.fromCharCode(a[i])
      if ("aeiou".indexOf(char) !== -1) a[i] = char
   }

   return a
}
