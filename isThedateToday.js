function isToday(date) {
   let dateFormatted = new Date(date)
   let dateNow = new Date(Date.now())

   return dateFormatted.toDateString() === dateNow.toDateString()
}

// ANSWERS
function isToday(date) {
   return new Date().toDateString() === date.toDateString();
}