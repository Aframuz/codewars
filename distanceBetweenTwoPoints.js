function distanceBetweenPoints(a, b) {
   return Math.sqrt((b.y - a.y) ** 2 + (b.x - a.x) ** 2)
}

// ANSWERS
function distanceBetweenPoints(a, b) {
   return Math.hypot(a.x - b.x, a.y - b.y)
}
