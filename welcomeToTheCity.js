function sayHello( name, city, state ) {
   return "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state + "!"
}

//ANSWERS
function sayHello( name, city, state ) {
   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}