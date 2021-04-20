function getStatus(isBusy) {
   const msg = (isBusy ? "busy" : "available")
   const obj = {}
   obj.status = msg
   return obj
}

//ANSWERS
function getStatus(isBusy) {
   var msg = (isBusy ? "busy" : "available");
   return {
     status: msg
   };
 }

 const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });