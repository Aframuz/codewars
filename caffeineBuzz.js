function caffeineBuzz(n) {
   let result = ""
   if (n % 3 === 0 && n % 4 === 0) {
      result = "Coffee"
   } else if (n % 3 === 0) {
      result = "Java"
   }

   if (result && n % 2 === 0) {
      result = result + "Script"
   }
   if (!result) {
      result = "mocha_missing!"
   }
   return result
}

// ANSWERS
function caffeineBuzz(n) {
   if (n % 12 === 0) return "CoffeeScript"
   if (n % 6 === 0) return "JavaScript"
   if (n % 3 === 0) return "Java"
   return "mocha_missing!"
}
