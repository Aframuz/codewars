function countBy(number, nTimes) {
   let arr = [];
   for( let i = 1; i <= nTimes; i++) {
      arr.push(number*i)
   }
   return arr;
}