function last(list) {
   if (arguments.length > 1) {
      return arguments[arguments.length - 1]
   }
   if (typeof list === "string" || typeof list === "object")
      return list[list.length - 1]
   else return 5
}

// ANSWERS
function last(list) {
   var last = arguments[arguments.length - 1]
   return last[last.length - 1] || last
}
