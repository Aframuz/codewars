function evil(n) {
   const binaryArray = n.toString(2).split("")
   const binarySum = binaryArray.reduce((acc, cVal) => acc + +cVal, 0)

   return binarySum % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

// ANSWERS
function evil(n) {
   return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}