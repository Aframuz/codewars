function yearDays(year) {
   if (year % 100 === 0 && year % 400 !== 0) {
      return `${year} has 365 days`
   } else if (year % 4 === 0) {
      return `${year} has 366 days`
   } else {
      return `${year} has 365 days`
   }
}

// ANSWERS
function yearDays(year) {
   return (
      year +
      " has " +
      ((!(year % 100) && year % 400) || year % 4 ? "365" : "366") +
      " days"
   )
}
