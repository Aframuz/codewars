function areYouPlayingBanjo(name) {
   return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`
 }

 //ANSWERS
 function areYouPlayingBanjo(name) {
   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
 }