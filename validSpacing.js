function validSpacing(str) {
   return !(str.endsWith(" ") || str.startsWith(" ") || str.includes("  "))
}

//ANSWERS
const validSpacing=s=>s.replace(/\s+/g," ").trim()==s;

function validSpacing(s) {
   return s.trim() == s && !s.includes("  ");
 }