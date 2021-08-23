function runYourString(arg, obj) {
   let func = new Function(obj.param, obj.func)
   return func(arg)
}
