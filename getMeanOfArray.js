function getAverage(marks){
   return Math.floor( marks.reduce((acc,cVal) => acc+cVal, 0) / marks.length )
}