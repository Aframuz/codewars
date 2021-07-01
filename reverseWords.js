function reverseWords(str) {
   let arr = str.split(" ")
   let arr2 = arr.map((word) => word.split("").reverse().join(""))
   return arr2.join(" ")
}
