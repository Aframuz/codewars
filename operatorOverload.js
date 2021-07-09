// ANSWERS
var Foo = function (value) {
   this.val = value
}

Foo.prototype.valueOf = function () {
   return this.val
}

// ------------------------------------------
var Foo = function (value) {
   return new Number(value)
}
