function contentWeight(bottleWeight, scale) {
   let scaleParsed = parseInt(scale)
   let contentWeight = 0
   if (scale.includes("larger")) {
      contentWeight = (bottleWeight / (scaleParsed + 1)) * scaleParsed
   } else {
      contentWeight = (bottleWeight / (1 / scaleParsed + 1)) * (1 / scaleParsed)
   }
   return contentWeight
}

// ANSWERS
function contentWeight(bottleWeight, scale) {
   var s = parseInt(scale);
   return /larger/.test(scale) ? bottleWeight * s / (s+1) : bottleWeight / (s+1);
 