function isOrthogonal(u, v) {
   let dotP = []
   for (let i = 0; i < u.length; i++) {
      dotP.push(u[i] * v[i])
   }
   return dotP.reduce((acc, cVal) => acc + cVal, 0) === 0
}

//ANSWERS
function isOrthogonal(u, v) {
   return !u.reduce((s, n, i) => s + n * v[i], 0)
}
