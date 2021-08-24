var reg = /(["'])(?:(?=(\\?))\2.)*?\1/g
function getQuotes(string) {
   return string.match(reg)
}
