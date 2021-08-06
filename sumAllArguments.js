function sum() {
   return [...arguments].reduce((acc, cVal) => acc + cVal, 0)
}
