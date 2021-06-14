function solution(number){
   let totalA = 0
   let totalB = 0
   let totalC = 0
   for (let i = 0; i < number; i++) {
      if(i % 3 === 0 && i % 5 === 0){
         totalC += 1
      } else if(i % 5 === 0){
         totalB += 1
      } else if(i%3 === 0){
         totalA += 1
      }
   }
   return [totalA, totalB, totalC -1]
}

// ANSWERS
function solution(n) {
   --n;
   const c15 = Math.floor(n / 15);
   const c3 = Math.floor(n / 3) - c15;
   const c5 = Math.floor(n / 5) - c15;
   return [c3, c5, c15];
 }