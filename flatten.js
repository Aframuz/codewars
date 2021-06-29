var flatten = function (array) {
   return array.reduce((acc, cVal) => acc.concat(cVal), [])
}
