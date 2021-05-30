function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
   if (dolphin) sharkSpeed = sharkSpeed / 2
   let youSec = pontoonDistance / youSpeed
   let sharkSec = sharkDistance / sharkSpeed
   return youSec > sharkSec ? "Shark Bait!" : "Alive!"
}
