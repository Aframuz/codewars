function shadesOfGrey(n) {
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
   let arr = []
   let abort = false

   if (n < 1) return []
   if (n > 254) n = 254
   console.log(n)

   for (let i = 0; i < hex.length && !abort; i++) {
      for (let j = 0; j < hex.length && !abort; j++) {
         if (arr.length === n) abort = true
         arr.push(`#${hex[i]}${hex[j]}${hex[i]}${hex[j]}${hex[i]}${hex[j]}`)
      }
   }
   arr.shift()
   return arr
}
