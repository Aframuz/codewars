function periodIsLate(last, today, cycleLength) {
   realCycle = today.getTime() - last.getTime()
   cycleLength = cycleLength * 8.64e7
   return realCycle > cycleLength
}

// ANSWERS
function periodIsLate(last, today, cycleLength) {
   return (today - last) / 86400000 > cycleLength
}
