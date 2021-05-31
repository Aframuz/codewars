function squareOrSquareRoot(array) {
   return array.map((number) => {
      if (Number.isInteger(Math.sqrt(number))) return Math.sqrt(number)
      else return number ** 2
   })
}
