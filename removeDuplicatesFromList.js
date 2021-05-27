function distinct(a) {
   return [...new Set(a)]
}

// ANSWERS
const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index)
