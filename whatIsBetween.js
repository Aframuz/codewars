function between(a, b) {
   let arr = []
   for(let i = a; i <= b; i++){
      arr.push(i)
   }
   return arr
}

//ANSWERS
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);