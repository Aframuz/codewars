function solution(pairs) {
   let str = ""
   for (const [key, value] of Object.entries(pairs)) {
      str += `${key} = ${value},`
   }
   return str.replace(/(,$)/, "")
}

// ANSWERS
function solution(pairs) {
   return Object.keys(pairs)
      .map(function (k) {
         return k + " = " + pairs[k]
      })
      .join(",")
}
