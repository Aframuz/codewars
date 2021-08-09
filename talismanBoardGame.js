function getRequired(player, enemy) {
   let p1 = player.reduce((a, c) => a + c)
   let p2 = enemy.reduce((a, c) => a + c)

   if (p1 - p2 >= 6) return "Auto-win"
   if (p2 - p1 >= 6) return "Auto-lose"
   if (p2 - p1 === 5) return "Pray for a tie!"
   if (p1 === p2) return "Random"

   if (p1 > p2) {
      return `(${p2 - p1 + 7}..6)`
   }
   if (p1 < p2) {
      return `(1..${p1 - p2 + 5})`
   }
}
