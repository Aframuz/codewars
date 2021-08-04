function copyList(l) {
   let arr = []
   l.forEach((item) => {
      arr.push(item)
   })
   return arr
}

// ANSWERS
function copyList(l) {
   return l.slice()
}

//
function copyList(l) {
   return [...l]
}
