function runYourString(arg, obj) {
   let func = new Function(arg, obj.func)
   return func(obj.param)
}
