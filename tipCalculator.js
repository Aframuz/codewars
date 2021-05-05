function calculateTip(amount, rating) {
   if(rating.toLowerCase() === 'terrible') {
      return 0
   } else if(rating.toLowerCase() === 'poor') {
      return Math.ceil(amount*0.05)
   } else if(rating.toLowerCase() === 'good') {
      return Math.ceil(amount*0.1)
   } else if(rating.toLowerCase() === 'great') {
      return Math.ceil(amount*0.15)
   } else if(rating.toLowerCase() === 'excellent') {
      return Math.ceil(amount*0.20)
   } else {
      return 'Rating not recognised'
   }

}

// ANSWERS 

const TIPS = {
   "terrible": 0.0,
   "poor": 0.05,
   "good": 0.1,
   "great": 0.15,
   "excellent": 0.2
 };
 
 const calculateTip = (amount, rating) => {
   rating = rating.toLowerCase();
   
   return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
 };
