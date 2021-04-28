function getGrade (s1, s2, s3) {
   const average = (s1 + s2 + s3) / 3
   if(average >= 90) {
      return "A"
   } else if(average >=80) {
      return "B"
   } else if(average >=70) {
      return "C"
   } else if(average >=60) {
      return "D"
   } else {
      return "F"
   }
 }

 //ANSWERS
 function getGrade (s1, s2, s3) {
   avg = (s1+s2+s3)/3;
   if (avg < 60)  return "F";
     else if (avg < 70) return "D";
     else if (avg < 80) return "C";
     else if (avg < 90) return "B";
     else return "A";
 }

 function getGrade (s1, s2, s3) {
   var s = (s1 + s2 + s3) / 3
   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
 }