const data = [1, 2, 10, 8]

function twoOldestAges(data) {
   return data.sort((a,b) => b - a).slice(0, 2)
}