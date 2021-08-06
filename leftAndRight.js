function left$(str, i) {
   if (i === 0) return ""
   if (!i) i = 1
   if (Math.abs(str) > str.length) return str
   if (typeof i === "number") {
      if (i > 0) return str.slice(0, i)
      else return str.slice(0, str.length - Math.abs(i))
   } else {
      let index1 = str.indexOf(i)
      return str.slice(0, index1)
   }
}

function right$(str, i) {
   if (i === 0) return ""
   if (!i) i = 1
   if (Math.abs(str) > str.length) return str
   if (typeof i === "number") {
      if (i > 0) return str.slice(-i, str.length)
      else return str.slice(Math.abs(i) - str.length, str.length)
   } else {
      let index2 = str.lastIndexOf(i)
      return str.slice(index2 + i.length, str.length)
   }
}

// ANSWERS
function left$(str, i) {
   if (i === undefined) i = 1
   if (typeof i === "string") i = str.indexOf(i)
   return str.slice(0, i)
}

function right$(str, i) {
   if (i === undefined) i = 1
   if (typeof i === "string") i = str.length - str.lastIndexOf(i) - i.length
   return i ? str.slice(-i) : ""
}
