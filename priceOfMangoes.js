function mango(quantity, price) {
   let realQ = quantity - Math.floor(quantity / 3)
   return realQ * price
}
