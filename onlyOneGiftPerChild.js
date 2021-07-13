let childArr = []
function handOutGift(name) {
   if (childArr.includes(name)) {
      throw "error"
   }
   childArr.push(name)
}

// ANSWERS
handOutGift = function (name) {
   this.children = this.children || []
   if (children.indexOf(name) > -1) {
      throw "Naughty child detected!"
   } else {
      children.push(name)
   }
}
