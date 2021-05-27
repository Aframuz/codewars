function correctPolishLetters(string) {
   return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
}

// ANSWERS
function correctPolishLetters(string) {
   var dict = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z",
   }
   return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match])
}
