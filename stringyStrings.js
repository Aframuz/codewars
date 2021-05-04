function stringy(size) {
   let str = ''
   for(let i = 1; i <= size; i++) {
      if(i % 2){
         str += '1'
      } else {
         str += '0'
      }
   }
   return str
}

//ANSWERS
function stringy(size) {
   var str='';
   for( var i=1; i<=size; i++ )
     str+=i%2;
   return str;
}