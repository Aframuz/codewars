function remove(s, n) {
   if (n > s.length) {
      return (s = s.replace(/!/g, ""))
   }
   for (let i = 0; i < n; i++) {
      if (s.indexOf("!") === 0) {
         s = s.slice(1)
      } else {
         let index = s.indexOf("!")
         s = s.slice(0, index) + s.slice(index + 1)
      }
   }
   return s
}
