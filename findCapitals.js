var capitals = function (word) {
   let arr = []
   for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
         arr.push(i)
      }
   }
   return arr
}

// ANSWERS
var capitals = function (word) {
   return word.split("").reduce(function (memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo
   }, [])
}
