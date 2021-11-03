var array = ['João','Oliver','Maria']

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
    
// }

// var newValue = array.indexOf('Oliver')

// console.log(newValue)

// array.push('Yung')

// console.log(array)

// array.splice(0, 1)
// console.log(array)


var index = array.indexOf('Oliver')
array.splice(index, 1)
console.log(array)