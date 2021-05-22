function isOpposite(s1, s2) {
   if (s1.length !== s2.length || !s1) return false
   if (s1.toUpperCase() === s2.toUpperCase()) {
      for (let i = 0; i < s1.length; i++) {
         if (s1[i] === s2[i]) return false
      }
      return true
   }
   return false
}

// ANSWERS
function isOpposite(s1, s2) {
   return (
      s1
         .split("")
         .map((c) =>
            c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
         )
         .join("") === s2 && s1 !== ""
   )
}
