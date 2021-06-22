function defineSuit(card) {
   const cardSuit = card.slice(-1)
   const cardCode = cardSuit.charCodeAt()
   if (cardCode === 9827) {
      return "clubs"
   } else if (cardCode === 9824) {
      return "spades"
   } else if (cardCode === 9830) {
      return "diamonds"
   } else {
      return "hearts"
   }
}

// ANSWERS
function defineSuit(card) {
   const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts",
   }
   return s[card.charAt(card.length - 1)]
}
