const { createHash } = require("crypto")
function passHash(str) {
   const hash = createHash("md5")
   hash.update(str)
   return hash.digest("hex")
}
