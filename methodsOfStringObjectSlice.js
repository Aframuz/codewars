function cutIt(arr) {
   arrLength = arr.map((str) => str.length)
   min = Math.min(...arrLength)
   return arr.map((str) => str.slice(0, min))
}
