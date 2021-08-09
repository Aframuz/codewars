function maskify(cc) {
   let length = cc.length
   return cc.slice(-4).padStart(length, "#")
}
