function typing(param) {
   if (typeof param === "string") return `${typeof param}="${param}"`
   if (Array.isArray(param)) return `${typeof param}=[${param}]`
   if (typeof param === "object")
      return `${typeof param}=${JSON.stringify(param)}`
   if (typeof param === "undefined") return "undefined"

   return `${typeof param}=${param}`
}

// ANSWERS
function typing(param) {
   return param === undefined
      ? "undefined"
      : typeof param + "=" + (JSON.stringify(param) || param)
}
