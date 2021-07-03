function sortList(sortBy, list) {
   if (list) {
      return list.sort((a, b) => b[sortBy] - a[sortBy])
   }
}
