var numberToMoney = function (n) {
   let nFixed = (Math.trunc(n * 100) / 100).toString()
   let nInt = nFixed.split(".")[0]
   let nArr = nInt.split("")
   if (nArr.length > 3) {
      nArr.splice(-3, 0, ",")
   }

   if (nFixed.split(".")[1]) {
      return nArr.join("") + "." + nFixed.split(".")[1]
   } else return nArr.join("")
}

// ANSWERS
function numberToMoney(n) {
   return String(Math.floor(n * 100) / 100).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
   )
}
