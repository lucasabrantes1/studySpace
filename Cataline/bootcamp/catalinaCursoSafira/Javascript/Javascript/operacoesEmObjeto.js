var person = {
    name: 'Lucas Abrantes',
    heigth: 70.6,
}
// Object.freeze(person) - impede a ação de reatribuir o valor da varíavel
// person.age = 15
//  person.name = 'Ana'
// console.log(person)

var any = {
    age: 15
}

var newObject = Object.assign(person, any)
console.log(newObject)
