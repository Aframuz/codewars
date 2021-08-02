var nextFiveDays = function (date) {
   let dates = []
   let tomorrow = new Date(date)

   for (let i = 1; i <= 5; i++) {
      tomorrow.setDate(tomorrow.getDate() + 1)
      dates.push(
         `${
            tomorrow.getMonth() + 1
         }/${tomorrow.getDate()}/${tomorrow.getFullYear()}`
      )
   }
   return dates.join(", ")
}
