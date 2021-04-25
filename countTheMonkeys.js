function monkeyCount(n) {
   let arr = []
   for(let i = 1; i <= n; i++) {
      arr.push(i)
   }
   return arr
}

//ANSWERS 
function monkeyCount(n) {
   return Array.from({length:n}, (_,i)=>i+1)
 }