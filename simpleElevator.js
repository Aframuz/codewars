function goto(level,button){
   if(typeof level !== "number" || typeof button !== "string") return 0
   if(level >3 || +button > 3) return 0
   if(!Number.isInteger(level) || !Number.isInteger(+button)) return 0
   return button - level
}

//ANSWERS
function goto(level,button){
   const possbileLevels = [0,1,2,3];
   const possbileButtons = ["0","1","2","3"];
 
   if (possbileLevels.indexOf(level) <0) return 0;
   if (possbileButtons.indexOf(button) <0) return 0;
 
   return parseInt(button) - level;
 }