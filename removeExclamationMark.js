function remove(s) {
   return s.slice(-1) === "!" ? s.slice(0, -1) : s
}

// ANSWERS
const remove = (s) => s.replace(/!$/, "")
