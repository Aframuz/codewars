var Singleton = function () {
   "use strict"
   if (Singleton._instance) {
      return Singleton._instance
   }
   Singleton._instance = this
}
Singleton.getInstance = function () {
   "use strict"
   return Singleton._instance || new Singleton()
}

// ANSWERS
var Singleton = function () {
   if (Singleton.__instance) {
      return Singleton.__instance
   }

   Singleton.__instance = this
}
