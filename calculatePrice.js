function excludingVatPrice(price) {
   return price ? +(price / 1.15).toFixed(2) : price === 0 ? 0 : -1
}
