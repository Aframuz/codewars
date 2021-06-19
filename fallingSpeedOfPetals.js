function sakuraFall(v) {
   console.log(v)
   const height = 5 * 80
   const seconds = height / v
   return v <= 0 ? 0 : seconds
}
