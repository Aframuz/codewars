function guessBlue(blueStart, redStart, bluePulled, redPulled) {
   let total = blueStart + redStart
   let left = total - (bluePulled + redPulled)
   return (blueStart - bluePulled) / left
}
