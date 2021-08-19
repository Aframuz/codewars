var nextBirthdayOfTheWeek = function (birthday) {
   let day = birthday.getDay()
   let nextYear = new Date(birthday)

   do {
      nextYear.setFullYear(nextYear.getFullYear() + 1)
   } while (nextYear.getDay() !== day)

   return nextYear.getFullYear() - birthday.getFullYear()
}
