function isLockNessMonster(s) {
   if(s.indexOf("tree fiddy") !== -1 || s.indexOf("$3.50") !== -1) {
      return true
   }
   return false 
}

//ANSWERS
const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);

function isLockNessMonster(s) {
   return s.includes("tree fiddy") || s.includes("3.50");
 }