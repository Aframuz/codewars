function correctTail(body, tail) {
   sub = body.substr(body.length - tail.length)

   if (sub === tail) {
      return true
   } else {
      return false
   }
}

// ANSWERS
function correctTail(bod, tail) {
   return bod[bod.length - 1] === tail
}

const correctTail = (x, y) => x.endsWith(y)
