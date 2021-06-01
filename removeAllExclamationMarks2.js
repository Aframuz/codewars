function remove(s) {
   s = s.replace(/!/g, "")
   return (s = s + "!")
}

// ANSWERS
const remove = (s) => s.replace(/!+/g, "") + "!"
