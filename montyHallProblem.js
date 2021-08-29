function montyHall(correctDoorNumber, participantGuesses) {
   let pguess = participantGuesses.length
   let incorrect = participantGuesses.filter((num) => num !== correctDoorNumber)
   return Math.round((incorrect.length / pguess) * 100)
}
