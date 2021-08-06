function sortDict(dict) {
   const entries = Object.keys(dict).map((key) => [+key || key, dict[key]])
   entries.sort((a, b) => b[1] - a[1])
   return entries
}
