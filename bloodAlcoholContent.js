function bloodAlcoholContent(drinks, weight, sex, time) {
   let r = 0.73
   sex === "male" ? (r = 0.73) : (r = 0.66)
   const formula =
      ((drinks.ounces * drinks.abv * 5.14) / weight) * r - 0.015 * time
   return +formula.toFixed(4)
}

// ANSWERS
function bloodAlcoholContent(drinks, weight, sex, time) {
   return parseFloat(
      (
         ((drinks.ounces * drinks.abv * 5.14) / weight) *
            (sex == "male" ? 0.73 : 0.66) -
         0.015 * time
      ).toFixed(4)
   )
}
