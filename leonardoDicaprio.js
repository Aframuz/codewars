function leo(oscar) {
   if (oscar === 88) {
      return "Leo finally won the oscar! Leo is happy"
   } else if (oscar === 86) {
      return "Not even for Wolf of wallstreet?!"
   } else if (oscar < 88 || oscar === 87) {
      return "When will you give Leo an Oscar?"
   } else {
      return "Leo got one already!"
   }
}

// ANSWERS
const leo = (oscar) => {
   return oscar === 88
      ? "Leo finally won the oscar! Leo is happy"
      : oscar === 86
      ? "Not even for Wolf of wallstreet?!"
      : oscar < 88
      ? "When will you give Leo an Oscar?"
      : "Leo got one already!"
}
