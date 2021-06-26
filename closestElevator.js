function elevator(left, right, call) {
   if (left === right) return "right"
   return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"
}
