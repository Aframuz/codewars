function toCsvText(array) {
   let str = ""
   for (let i = 0; i < array.length; i++) {
      str += `${array[i].join(",")}\n`
   }
   return str.substr(0, str.length - 1)
}

// ANSWERS
function toCsvText(array) {
   return array.join("\n")
}
