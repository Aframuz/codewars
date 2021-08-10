String.prototype.toBase64 = function () {
   let buff = new Buffer(this)
   return buff.toString("base64")
}

String.prototype.fromBase64 = function () {
   let buff = new Buffer(this, "base64")
   return buff.toString("utf-8")
}
