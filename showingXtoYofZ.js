var paginationText = function (pageNumber, pageSize, totalProducts) {
   if (totalProducts < pageSize)
      return `Showing 1 to ${totalProducts} of ${totalProducts} Products.`
   if (pageNumber * pageSize > totalProducts)
      return `Showing ${
         (pageNumber - 1) * pageSize + 1
      } to ${totalProducts} of ${totalProducts} Products.`

   return `Showing ${pageSize * pageNumber - pageSize + 1} to ${
      pageSize * pageNumber
   } of ${totalProducts} Products.`
}

// ANSWERS
var paginationText = function (pageNumber, pageSize, totalProducts) {
   return (
      "Showing " +
      ((pageNumber - 1) * pageSize + 1) +
      " to " +
      Math.min(pageSize * pageNumber, totalProducts) +
      " of " +
      totalProducts +
      " Products."
   )
}
