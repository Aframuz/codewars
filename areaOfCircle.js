var circleArea = function (radius) {
   if (radius <= 0 || typeof radius !== "number") return false
   else return +(Math.PI * radius ** 2).toFixed(2)
}
