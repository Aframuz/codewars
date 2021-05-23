function calculateAge(born, year) {
   if (born === year) return "You were born this very year!"
   else if (born < year)
      return `You are ${year - born} year${year - born === 1 ? "" : "s"} old.`
   else
      return `You will be born in ${born - year} year${
         born - year === 1 ? "" : "s"
      }.`
}
