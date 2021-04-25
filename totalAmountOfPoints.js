function points(games) {
   let counter = 0

   games.forEach(game => {
      let result = game.split(":")
   
      if(result[0] === result[1]){
         counter += 1
      } else if(result[0] > result[1]){
         counter += 3
      }
   })

   return counter
}

//ANSWERS
const points=games=>games.reduce((output,current)=>{
   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

function points(games) {
   let total = 0;
   games.map(game => {
     if (game[0] === game[2]) {
       total += 1;
     } else if (game[0] > game[2]) {
       total += 3;
     }
   });
   return total;
 }