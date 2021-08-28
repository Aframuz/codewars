class HTMLGen {
   constructor() {}

   a(string) {
      return `<a>${string}</a>`
   }
   b(string) {
      return `<b>${string}</b>`
   }
   p(string) {
      return `<p>${string}</p>`
   }
   body(string) {
      return `<body>${string}</body>`
   }
   div(string) {
      return `<div>${string}</div>`
   }
   span(string) {
      return `<span>${string}</span>`
   }
   title(string) {
      return `<title>${string}</title>`
   }
   comment(string) {
      return `<!--${string}-->`
   }
}
