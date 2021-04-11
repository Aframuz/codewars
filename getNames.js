const data = [
   {name: 'Joe', age: 20},
   {name: 'Bill', age: 30},
   {name: 'Kate', age: 23}
 ]

// function getNames(arr) {
//    let arr2 = []
//    arr.forEach(item => {
//       arr2.push(item.name)
//    })
//    return arr2
// }

function getNames(arr) {
   arr.map(item => item.name)
}