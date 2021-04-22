function shortcut(string){
   const vowels = ["a", "e", "i", "o", "u"]
   return string.split("").filter(letter => !vowels.includes(letter)).join("")
}

//ANSWERS
function shortcut(string){
   return string.replace(/[aeiou]/g,'')
}

function shortcut(str) {
   return str.split('').filter(function(e) {
     return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
   }).join('')
 }