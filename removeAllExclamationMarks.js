function remove(s) {
   if (s.slice(-1) !== "!") return s
   else s = s.slice(0, -1)
   return remove(s)
}

// ANSWERS
const remove = (s) => s.replace(/!+$/, "")
