function iceBrickVolume(radius, bottleLength, rimLength) {
   const cubeLength = bottleLength - rimLength
   return 2 * radius * radius * cubeLength
}
