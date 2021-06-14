function contamination(text, char){
  if(text && char){
     return text.split("").map(letter => char).join("")
  }
  return ""
 }