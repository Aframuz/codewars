function whoIsPaying(name) {
   let arr = [""]
   if (!name) return arr
   arr[0] = name
   if (name.length < 3) {
      return arr
   } else {
      arr.push(name.substr(0, 2))
   }
   return arr
}
