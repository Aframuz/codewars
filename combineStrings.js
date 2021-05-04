function combineNames(name1, name2) {
   return `${name1} ${name2}`
}

//ANSWERS
const combineNames = (...names) => names.join(' ');