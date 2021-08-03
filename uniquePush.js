function uniquePush(arr, obj) {
   let found = false
    if (!obj.phoneNumber) {
       return false
    }
    for (let i = 0; i < arr.length; i++) {
       if (arr[i].phoneNumber === obj.phoneNumber) {
          found = true
          break
       }
    }
    if (!found) {
       arr.push(obj)
       return true
    }
 }
 