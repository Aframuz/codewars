const findAverage = function (nums) {
   return nums.reduce((acc, cVal) => acc + cVal, 0) / nums.length
}