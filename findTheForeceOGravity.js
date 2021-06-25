solution = (arr_val, arr_unit) => {
   const GRAVITY = 6.67 * Math.pow(10, -11)
   const gForce = (GRAVITY * arr_val[0] * arr_val[1]) / arr_val[2]
   return gForce.toFixed(2)
}
