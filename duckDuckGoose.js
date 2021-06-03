function duckDuckGoose(players, goose) {
   let num = goose % players.length
   if (goose > players.length) {
      if (num === 0) {
         return players[players.length - 1].name
      } else {
         return players[num - 1].name
      }
   }
   console.log(goose)
   return players[goose - 1].name
}

// ANSWERS
function duckDuckGoose(players, goose) {
   return players[(goose - 1) % players.length].name
}
