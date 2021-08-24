function shadesOfGrey(n) {
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
   let arr = []

   for (let i = 0; i <= n; i++) {
      for (let j = 0; j < 1; j++) {
         arr.push(`${hex[j]}${hex[i]}${hex[j]}${hex[i]}${hex[j]}${hex[i]}`)
      }
   }
   return arr
}
