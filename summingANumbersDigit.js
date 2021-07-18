function sumDigits(number) {
   let numParsed = number.toString().split("")
   return +numParsed
      .filter((item) => item !== "-")
      .reduce((acc, cVal) => Math.abs(+acc) + Math.abs(+cVal))
}
