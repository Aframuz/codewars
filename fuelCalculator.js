function fuelPrice(litres, pricePerLitre) {
   if (litres < 2) return pricePerLitre * litres
   else if (litres < 4)
      return +(pricePerLitre * litres - 0.05 * litres).toFixed(2)
   else if (litres < 6)
      return +(pricePerLitre * litres - 0.1 * litres).toFixed(2)
   else if (litres < 8)
      return +(pricePerLitre * litres - 0.15 * litres).toFixed(2)
   else if (litres < 10)
      return +(pricePerLitre * litres - 0.2 * litres).toFixed(2)
   else return +(pricePerLitre * litres - 0.25 * litres).toFixed(2)
}

// ANSWERS
function fuelPrice(litres, pricePerLiter) {
   for (var i = 2; i <= 10; i += 2) {
      //discount loop
      if (litres >= i) {
         pricePerLiter -= 0.05
      }
   }
   return Math.round(litres * pricePerLiter * 100) / 100
}

function fuelPrice(litres, pricePerLiter) {
   var discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25)
   var price = litres * (pricePerLiter - discount)
   return Math.round(price * 100) / 100
}
