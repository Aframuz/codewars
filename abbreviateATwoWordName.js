function abbrevName(name){
   return (name.split(" ")[0][0] + "." + name.split(" ")[1][0]).toUpperCase()
}


//ANSWERS
function abbrevName(name){
   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
 }

