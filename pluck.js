function pluck(objs, name) {
   return objs.map((item) => {
      if (item[name]) {
         return item[name]
      } else {
         return undefined
      }
   })
}

// ANSWERS
function pluck(objs, name) {
   return objs.map(function (obj) {
      return obj[name]
   })
}
