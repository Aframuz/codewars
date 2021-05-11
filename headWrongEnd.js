function fixTheMeerkat(arr) {
   const transit = arr[0]
   arr[0] = arr[2]
   arr[2] = transit
   return arr
}

// ANSWERS
function fixTheMeerkat(arr) {
   return arr.reverse()
}

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

function fixTheMeerkat(arr) {
   return [arr[2], arr[1], arr[0]]
}
