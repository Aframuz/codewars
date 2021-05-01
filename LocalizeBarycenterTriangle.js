function barTriang(p1, p2, p3){
   let arr = []
   for(let i = 0; i<2; i++){
      let pBari = (p1[i] + p2[i] + p3[i]) / 3
      pBari = +pBari.toFixed(4)
      arr.push(pBari)
   }
   return arr
}