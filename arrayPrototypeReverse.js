Array.prototype.reverse = function () {
   let length = this.length
   for (let i = this.length - 1; i >= 0; i--) {
      this.push(this[i])
   }
   for (let i = 0; i < this.length; i++) {
      this.shift()
   }
   return this
}

// ANSWERS
Array.prototype.reverse = function () {
   for (var i = 0, j = this.length - 1; i < j; i++, j--) {
      var tmp = this[i]
      this[i] = this[j]
      this[j] = tmp
   }
   return this
}
