function getMissingElement(superImportantArray) {
   let fullArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   return fullArray.filter((n) => !superImportantArray.includes(n))[0]
}

// ANSWERS
function getMissingElement(superImportantArray) {
   for (i = 0; i < 10; i++) {
      if (superImportantArray.indexOf(i) === -1) return i
   }
}
