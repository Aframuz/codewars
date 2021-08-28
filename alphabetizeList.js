function sortIt(list, n) {
   var wordArray = list.split(", ")
   var sorted = wordArray.sort(function (a, b) {
      if (a[n - 1].toLowerCase() == b[n - 1].toLowerCase()) {
         return 0
      } else if (a[n - 1].toLowerCase() > b[n - 1].toLowerCase()) {
         return 1
      } else {
         return -1
      }
   })
   return sorted.join(", ")
}

// ANSWERS
const sortIt = (list, n) =>
   list
      .split(`, `)
      .sort(
         (a, b) =>
            a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()) ||
            a.localeCompare(b)
      )
      .join(`, `)
