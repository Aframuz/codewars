function Calculator(vatRate) {
   //your code here
   this.getNet = function (grossPrice) {
      let net = grossPrice / (1 + vatRate / 100)
      return +net.toFixed(2)
   }

   this.getVat = function (grossPrice) {
      let vat = grossPrice - grossPrice / (1 + vatRate / 100)
      return +vat.toFixed(2)
   }
}
