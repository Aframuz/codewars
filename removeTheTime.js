function shortenToDate(longDate) {
   let comma = longDate.indexOf(',')
   return longDate.slice(0,comma)
}

// ANSWERS 
function shortenToDate(longDate) {
   return longDate.split(",")[0];
 }