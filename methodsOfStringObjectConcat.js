function splitAndMerge(string, separator) {
   words = string.split(" ")
   let arr = []
   for (let i = 0; i < words.length; i++) {
      console.log(words[i])
      arr.push(words[i].split("").join(separator))
   }
   return arr.join(" ")
}

// ANSWERS
function splitAndMerge(str, sp) {
   return str
      .split(" ")
      .map((word) => word.split("").join(sp))
      .join(" ")
}
