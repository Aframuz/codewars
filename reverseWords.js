function reverseWords(str) {
   let arr = str.split(" ")
   arr.map((word) => word.split("").reverse().join(""))
   arr.join(" ")
}
