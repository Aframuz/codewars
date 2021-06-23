function solution(string, limit) {
   if (limit < string.length) {
      string = string.substr(0, limit)
      return string.padEnd(string.length + 3, ".")
   } else return string
}

// ANSWERS
function solution(string, limit) {
   return string.length > limit ? string.substr(0, limit) + "..." : string
}
