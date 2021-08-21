function diagonalSum(matrix) {
   return matrix.reduce((acc, cVal, index) => cVal[index] + acc, 0)
}
