function aliasGen(fName, lName) {
   if (!/^[A-Za-z]/.test(fName) || !/^[A-Za-z]/.test(lName)) {
      return "Your name must start with a letter from A - Z."
   } else {
      return `${firstName[fName[0].toUpperCase()]} ${
         surname[lName[0].toUpperCase()]
      }`
   }
}
