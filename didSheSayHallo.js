function validateHello(greetings) {
   res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
   return res
}

// ANSWERS
const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);