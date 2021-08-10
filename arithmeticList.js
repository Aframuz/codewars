var seqlist = function (first, c, l) {
   let arr = []
   let num = first

   for (let i = 0; i < l; i++) {
      arr.push(num)
      num = num + c
   }
   return arr
}
