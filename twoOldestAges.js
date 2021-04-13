const data = [1, 2, 10, 8]

function twoOldestAges(data) {
   return data.sort((a,b) => b - a).slice(0, 2)
}

//ANSWERS
function twoOldestAges(ages){
   return ages.sort(function(a,b){return a-b;}).slice(-2); //Uso -2 en vez de 0,2
 }