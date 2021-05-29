function hello(name) {
   if (name) {
      nameSan = name[0].toUpperCase() + name.slice(1).toLowerCase()
      return `Hello, ${nameSan}!`
   } else {
      return `Hello, World!`
   }
}

// ANSWERS
const hello = (s) =>
   `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`
