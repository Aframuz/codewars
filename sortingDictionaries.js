function sortDict(dict) {
   return Object.keys(dict)
      .map(function (v) {
         return [+v || v, dict[v]]
      })
      .sort(function (a, b) {
         return a[1] < b[1]
      })
}

function sortDict(dict) {
   const entries = Object.keys(dict).map((key) => [+key || key, dict[key]])
   entries.sort((a, b) => b[1] - a[1])
   return entries
}
