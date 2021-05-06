// DIDNT WORK
String.prototype.digit = function() {
   const digit = /^\d{1}$/
   digit.test(12)
 };

// ANSWERS
String.prototype.digit = function() {
   return /^\d$/.test(this);
 };