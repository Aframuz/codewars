function warnTheSheep(queue) {
   queue = queue.reverse()
   let wolfIndex = queue.indexOf("wolf")
   if (wolfIndex === 0) return "Pls go away and stop eating my sheep"
   return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
}
