function noBoringZeros(n) {
   let nStr = String(n)
   return nStr.endsWith("0")
      ? noBoringZeros(nStr.substr(0, nStr.length - 1))
      : +nStr
}

// ANWERS
function noBoringZeros(n) {
   while (n % 10 == 0 && n != 0) {
      n /= 10
   }
   return n
}
