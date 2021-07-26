//ANSWERS
function towerCombination(n) {
   var out = 1
   for (var i = 2; i <= n; i++) out *= i
   return out
}
