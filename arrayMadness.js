function arrayMadness(a, b) {
   let squares = a.reduce((acc, cVal) => acc + cVal ** 2)
   let cubes = b.reduce((acc, cVal) => acc + cVal ** 3)

   return squares > cubes
}
