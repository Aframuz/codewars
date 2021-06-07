const isReallyNaN = (val) => {
   return val ? false : val === undefined ? false : isNaN(val)
}

// ANSWERS
const isReallyNaN = Number.isNaN

const isReallyNaN = (val) => val != val
