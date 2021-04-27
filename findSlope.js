function slope(points){
   const slope = (points[3] - points[1]) / (points[2] - points[0])
   return points[2] - points[0] === 0 ? "undefined" : slope.toString()
}

//ANSWERS 
function slope([ x1, y1, x2, y2 ]) {
   let slope = (y2 - y1) / (x2 - x1);
   return Number.isFinite(slope) ? `${slope}` : 'undefined';
 }