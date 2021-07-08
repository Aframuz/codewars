const isAnagram = function (test, original) {
   const testLowerCase = test.toLowerCase()
   const originalLowerCase = original.toLowerCase()
   return toChar(testLowerCase) === toChar(originalLowerCase)
}

function toChar(word) {
   let total = 0
   for (let i = 0; i < word.length; i++) {
      total += word[i].charCodeAt()
   }
   return total
}

// ANSWERS
var isAnagram = function (test, original) {
   var t = test.toLowerCase().split("").sort().join("")
   var o = original.toLowerCase().split("").sort().join("")
   return t == o ? true : false
}
