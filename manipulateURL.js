//ANSWERS

function addOrChangeUrlParameter(url, param) {
   url = url.replace(new RegExp(param.split("=")[0] + "=[^&]*"), param)
   return (
      url +
      (url.indexOf(param) >= 0
         ? ""
         : (url.indexOf("?") >= 0 ? "&" : "?") + param)
   )
}
