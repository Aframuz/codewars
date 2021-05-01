function betterThanAverage(classPoints, yourPoints) {
   const avg = classPoints.reduce((acc, cVal) => acc+cVal, 0) / classPoints.length
   return (yourPoints > avg)
}
 