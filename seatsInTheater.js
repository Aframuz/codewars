function seatsInTheater(nCols, nRows, col, row) {
   const totalCols = nCols - col + 1
   const totalRows = nRows - row
   return totalCols * totalRows
}
