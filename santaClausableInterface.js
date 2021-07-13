// ANSWERS
function isSantaClausable(obj) {
   return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(function (
      methodName
   ) {
      return typeof obj[methodName] == "function"
   })
}

// ---------------------------------------------------------
function isSantaClausable(obj) {
   return (
      "function" ==
      typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney)
   )
}
