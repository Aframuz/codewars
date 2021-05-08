function htmlspecialchars(formData) {
   return formData
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
}

// ANSWERS
function htmlspecialchars(formData) {
   return formData.replace(
      /[<>"&]/g,
      (ch) => ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" }[ch])
   )
}
