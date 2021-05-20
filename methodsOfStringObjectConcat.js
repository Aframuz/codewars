function splitAndMerge(string, separator) {
   words = string.split(" ")
   for (let i = 0; i < words.length; i++) {
      words[i].split("").join(".")
   }
   console.log(words)
}
