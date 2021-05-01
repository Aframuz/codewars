function cockroachSpeed(speed) {
   let _FACTOR = 1000/36
   speedCm = speed*_FACTOR
   return Math.floor(speedCm)
}

//ANSWERS 
const cockroachSpeed = s => Math.floor(s / 0.036);