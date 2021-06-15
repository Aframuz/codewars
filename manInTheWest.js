function checkTheBucket(bucket) {
   return bucket.some((item) => item === "gold")
}

// ANSWERS
function checkTheBucket(bucket) {
   return bucket.includes("gold")
}

const checkTheBucket = (b) => b.indexOf("gold") != -1
