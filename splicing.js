Array.prototype.removeValue = function (thing) {
   let index = this.lastIndexOf(thing)
   if (!this || index === -1) return false
   while (index > -1) {
      this.splice(index, 1)
      index = this.lastIndexOf(thing, index + 1)
   }
   return this
}
