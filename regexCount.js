function lowercaseCount(str){
   let reg = /[a-z]/g
   return ((str || '').match(reg) || []).length
}

// ANSWERS
function lowercaseCount(str){
   return (str.match(/[a-z]/g) || []).length
}