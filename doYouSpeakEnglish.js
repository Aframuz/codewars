function spEng(sentence) {
   sentence = sentence.toLowerCase()
   return sentence.includes("english")
}

// ANSWERS
function spEng(s) {
   return /english/i.test(s)
}
