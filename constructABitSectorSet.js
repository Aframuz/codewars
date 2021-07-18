function sortByBit(array) {
   if (!array) return 0
   else return array.reduce((acc, cVal) => acc + 2 ** cVal)
}
