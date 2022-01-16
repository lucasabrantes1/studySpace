/*
Extrai dados dos containers
*/

//Destructuing com array

const numero = [1,3,5,7]

const[num1,num2,num3,num4] = numero

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)

//Podemos descatar valores

const [n1, ,n3, n4] = numero

// console.log(n1)
// console.log(n3)
// console.log(n4)

//Podemos colocar valor default que sera usado caso não haja no container
const [nu1, nu2, nu3, nu4 =34, nu5=99] = numero
// console.log(nu1)
// console.log(nu2)
// console.log(nu3)
// console.log(nu4)
// console.log(nu5)



// Desstruturing com objeto

    const produto = {
        nome: "PS4",
        preco: 1678.44
    }

    const {nome,preco} = produto

    console.log(nome)
    console.log(preco)

    console.log(`${nome} custa ${preco}`)