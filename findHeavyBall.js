function findBall(scales) {
   // call scales.getWeight() max 4 times
   // return indexOfHeavyBall;
   let balls = [0, 1, 2, 3, 4, 5, 6, 7]
   let fHalf = [0, 1, 2, 3]
   let sHalf = [4, 5, 6, 7]
   let weight = scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7])

   if (weight === -1) {
      weight = scales.getWeight([0, 1], [2, 3])
      if (weight === -1) {
         weight = scales.getWeight([0], [1])
         if (weight === -1) return 0
         if (weight === 1) return 1
      }
      if (weight === 1) {
         weight = scales.getWeight([2], [3])
         if (weight === -1) return 2
         if (weight === 1) return 3
      }
   }
   if (weight === 1) {
      weight = scales.getWeight([4, 5], [6, 7])
      if (weight === -1) {
         weight = scales.getWeight([4], [5])
         if (weight === -1) return 4
         if (weight === 1) return 5
      }
      if (weight === 1) {
         weight = scales.getWeight([6], [7])
         if (weight === -1) return 6
         if (weight === 1) return 7
      }
   }
}

// ANSWERS
function findBall(scales) {
   var balls = [0, 1, 2, 3, 4, 5, 6, 7]
   while (balls.length > 1) {
      var left = balls.slice(0, (balls.length / 2) | 0)
      var right = balls.slice((balls.length / 2) | 0)
      balls = scales.getWeight(left, right) > 0 ? right : left
   }
   return balls[0]
}
