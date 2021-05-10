String.prototype.toAlternatingCase = function () {
   let arr = []
   let str = this.split("")
   for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() == str[i]) {
         arr.push(str[i].toUpperCase())
      } else {
         arr.push(str[i].toLowerCase())
      }
   }
   return arr.join("")
}

// ANSWERS
String.prototype.toAlternatingCase = function () {
   return this.split("")
      .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
      .join("")
}
