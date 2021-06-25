function generateRules(func, portList) {
   let str = ""
   for (let i = 0; i < portList.length; i++) {
      str += func(portList[i])
   }
   return str
}

// ANSWERS
function generateRules(func, portList) {
   return portList.map(func).join("")
}
