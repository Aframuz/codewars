function change(string) {
   string = string.toLowerCase()
   let arr = []
   const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
   ]
   for (let i = 0; i < 26; i++) {
      if (string.indexOf(letters[i]) !== -1) {
         arr.push(1)
      } else arr.push(0)
   }
   return arr.join("")
}

//ANSWERS
function change(string) {
   string = string.toLowerCase()
   return "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map(function (c) {
         return string.indexOf(c) !== -1 ? 1 : 0
      })
      .join("")
}
