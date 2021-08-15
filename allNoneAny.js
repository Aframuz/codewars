Array.prototype.all = function (p) {
   for (let i = 0; i < this.length; i++) {
      if (!p(this[i])) return false
   }
   return true
}

Array.prototype.none = function (p) {
   for (let i = 0; i < this.length; i++) {
      if (p(this[i])) return false
   }
   return true
}

Array.prototype.any = function (p) {
   for (let i = 0; i < this.length; i++) {
      if (p(this[i])) return true
   }
   return false
}

// ANSWERS
Array.prototype.all = function (p) {
   return this.filter(p).length == this.length
}

Array.prototype.none = function (p) {
   return this.filter(p).length == 0
}

Array.prototype.any = function (p) {
   return this.filter(p).length > 0
}
