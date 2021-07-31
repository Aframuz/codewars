function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
   const months = {
      January: 01,
      February: 02,
      March: 03,
      April: 04,
      May: 05,
      June: 06,
      July: 07,
      August: 08,
      September: 09,
      October: 10,
      November: 11,
      December: 12,
   }
   let cDate = currentDate.split(" ")
   let eDate = expirationDate.split(" ")
   let cDateParsed = `${cDate[2]}-${months[cDate[0]]}-${cDate[1]}`
   let eDateParsed = `${eDate[2]}-${months[eDate[0]]}-${eDate[1]}`
   let dateCurrent = new Date(cDateParsed)
   let dateExpiration = new Date(eDateParsed)

   if (enteredCode === correctCode) {
      if (dateCurrent <= dateExpiration) {
         return true
      }
   }
   return false
}

// ANSWERS
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
   return (
      enteredCode === correctCode &&
      Date.parse(expirationDate) >= Date.parse(currentDate)
   )
}
