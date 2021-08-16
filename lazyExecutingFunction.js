var make_lazy = function () {
   let argum = [...arguments]
   let f = argum[0](...argum.slice(1))
   return function () {
      return f
   }
}

// ANSWERS
var make_lazy = function (fn) {
   return fn.bind.apply(fn, arguments)
}
