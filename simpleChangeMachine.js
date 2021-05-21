function changeMe(moneyIn) {
   if (
      moneyIn !== "£5" &&
      moneyIn !== "£2" &&
      moneyIn !== "£1" &&
      moneyIn !== "50p" &&
      moneyIn !== "20p"
   ) {
      return moneyIn
   } else if (moneyIn === "£5") {
      return "20p ".repeat(25).trim()
   } else if (moneyIn === "£2") {
      return "20p ".repeat(10).trim()
   } else if (moneyIn === "£1") {
      return "20p ".repeat(5).trim()
   } else if (moneyIn === "50p") {
      return "20p 20p 10p"
   } else if (moneyIn === "20p") {
      return "10p 10p"
   }
}
