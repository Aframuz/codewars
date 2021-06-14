function aspectRatio(x,y){
   const RATIO = 16/9
   const newX = Math.ceil(RATIO * y)
   return [newX,y]
}