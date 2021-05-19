function colorOf(r, g, b) {
   const parse = (color) => {
      color = color.toString(16)
      if (color.length === 1) {
         color = color.padStart(2, "0")
      }
      return color
   }
   return `#${parse(r)}${parse(g)}${parse(b)}`
}
