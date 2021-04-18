function find_average(array) {
  return array.reduce((acc,cVal) => acc + cVal, 0)/ array.length || 0
}