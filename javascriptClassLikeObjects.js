class Animal {
   constructor(name, type) {
      this._name = name
      this._type = type
   }

   toString() {
      return `${this._name} is a ${this._type}`
   }

   get name() {
      return this._name
   }

   get type() {
      return this._type
   }

   set name(newName) {
      this._name = newName
   }
}
