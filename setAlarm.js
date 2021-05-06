function setAlarm(employed, vacation){
   if(vacation) return false
   return employed
}

// ANSWERS
const setAlarm = (employed, vacation) => employed && !vacation;
