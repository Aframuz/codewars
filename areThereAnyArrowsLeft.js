//DIDN'T WORK
function anyArrows(arrows){
   for (let i = 0; i < arrows.length; i++) {
      if(!arrows[i].hasOwnProperty("damaged")){
         return true
      }      
   }
   return false
}

//ANSWERS
function anyArrows(arrows){
   return arrows.some(a => !a.damaged);
 }