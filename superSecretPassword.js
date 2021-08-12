var superSecretChars = [
   ["a", "@"],
   ["s", "$"],
   ["o", "0"],
   ["h", "5"],
   ["x", "*"],
]
function createSSP(password) {
   password = password.replace(/[aA]/g, "@")
   password = password.replace(/[sS]/g, "$")
   password = password.replace(/[oO]/g, "0")
   password = password.replace(/[hH]/g, "5")
   password = password.replace(/[xX]/g, "*")

   return password
}

// ANSWERS
var chars = { a: "@", s: "$", o: 0, h: 5, x: "*" }
function createSSP(password) {
   return password.replace(/[asohx]/gi, function (m) {
      return chars[m.toLowerCase()]
   })
}
