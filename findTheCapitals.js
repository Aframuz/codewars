function capital(capitals) {
   return capitals.map((capital) => {
      if ("country" in capital) {
         return `The capital of ${capital[country]} is ${capital[capital]}`
      } else if ("state" in capital) {
         return `The capital of ${capital[state]} is ${capital[capital]}`
      }
   })
}
