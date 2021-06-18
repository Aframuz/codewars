function removeUrlAnchor(url) {
   if (url.indexOf("#") === -1) return url
   else return url.substr(0, url.indexOf("#"))
}

// ANSWERS
function removeUrlAnchor(url) {
   return url.split("#")[0]
}
