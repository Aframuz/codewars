function howMuchWater(water, load, clothes) {
   console.log(water, load, clothes)
   if (clothes > 2 * load) return "Too much clothes"
   if (clothes < load) return "Not enough clothes"
   let factor = 1.1 ** (clothes - load)
   return +(water * factor).toFixed(2)
}
