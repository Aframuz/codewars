function wordSearch(query, seq) {
   let result = seq.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
   )
   return result.length === 0 ? result : ["Empty"]
}

// ANSWERS
function wordSearch(query, seq) {
   var reg = new RegExp(query, "i")
   var res = seq.filter(function (val) {
      return reg.test(val)
   })
   return res.length > 0 ? res : ["Empty"]
}
