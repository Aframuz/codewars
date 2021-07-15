function addToAverage(current, points, add) {
   return (add + current * points) / (current + 1)
}

//ANSWERS
function addToAverage(current, points, add) {
   return (current * points + add) / (points + 1)
}
