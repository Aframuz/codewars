function well(x) {
   if (x.filter((idea) => idea === "good").length > 2)
      return "I smell a series!"
   else if (x.filter((idea) => idea === "good").length > 0) return "Publish!"
   else return "Fail!"
}

// ANSWERS
const well = (x) => {
   const good_count = x.filter((x) => x == "good").length
   return good_count < 1
      ? "Fail!"
      : good_count < 3
      ? "Publish!"
      : "I smell a series!"
}
