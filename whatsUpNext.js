// BAD
function nextItem(arr, item) {
   for(let i = 0; i < arr.length; i++){
      if(arr[i]===item){
         return arr[i+1]
      }
   }
}

//ANSWERS
function nextItem(xs, item) {
   var found = false;
   for (var x of xs) {
     if (found) return x;
     if (x == item) found = true;
   }
   return undefined;
}

const nextItem = (xs, item) => {
   const iter = xs[Symbol.iterator]();
   for (let el of iter) {
     if (el === item) return iter.next().value;
   }
}

 