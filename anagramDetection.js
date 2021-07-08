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
