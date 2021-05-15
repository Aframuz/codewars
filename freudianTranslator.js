function toFreud(string) {
   if (!string) return ""
   return string.replace(/\w+/g, "sex")
}

// ANSWERS
var toFreud = (s) => s.replace(/[^ ]+/g, "sex")
