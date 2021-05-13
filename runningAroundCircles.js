// ANSWERS
circular = { value: "Hello World" }
circular.self = circular

class Circular {
   constructor() {
      this.value = "Hello World"
      this.self = this
   }
}
circular = new Circular()
