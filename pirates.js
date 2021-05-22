const cannonsReady = (gunners) => {
   for (const key in gunners) {
      if (gunners[key] === "nay") return "Shiver me timbers!"
   }
   return "Fire!"
}

// ANSWERS

const cannonsReady = (gunners) => {
   return Object.values(gunners).some((m) => m === "nay")
      ? "Shiver me timbers!"
      : "Fire!"
}
