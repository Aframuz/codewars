function myParseInt(str) {
  let arr = str.split(" ")
  if(arr.length > 1) return NaN
  if(Number.isInteger(str)) return +str
  return NaN
}