String.prototype.repeat = function (count) {
   let str = ""
   for (let i = 0; i < count; i++) {
      str += this
   }
   return str
}

// ANSWERS
String.prototype.repeat = function (count) {
   return new Array(count + 1).join(this)
}
