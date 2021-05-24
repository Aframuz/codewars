var countSquares = function (cuts) {
   if (cuts === 0) return 1
   return (cuts + 1) ** 3 - (cuts - 1) ** 3
}

// ANSWERS
const countSquares = (cuts) => (cuts === 0 ? 1 : 6 * cuts * cuts + 2)
