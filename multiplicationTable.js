function multiTable(number) {
   let str = ""
   for (let i = 1; i < 11; i++) {
      str += `${i} * ${number} = ${i * number}\n`
   }
   return str.substr(0, str.length - 1)
}

// ANSWERS
const multiTable = (number) => {
   let table = ""

   for (let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`
   }

   return table
}
