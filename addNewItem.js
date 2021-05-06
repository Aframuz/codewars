// DIDNT WORK
function addExtra( listOfNumbers ){
   listOfNumbers.push(13)
   let newList = listOfNumbers
   return newList
}

// ANSWERS 
function addExtra( listOfNumbers ){
   return [...listOfNumbers, 13];
}

function addExtra(listOfNumbers) {
   return listOfNumbers.concat(0)
 }