function generateLink(user) {
   user = encodeURIComponent(user)
   return `http://www.codewars.com/users/${user}`
}
