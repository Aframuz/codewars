function searchNames(logins) {
   if (logins) {
      return logins.filter((login) => login[0].endsWith("_"))
   }
}
