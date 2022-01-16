const curso = {
    nome: 'Programação em javascript',
    horas: 25,
    preco: 27.99
}
// console.log(curso)
// console.log(typeof(curso))


// console.log(Object.keys(curso)) // --> mostra todos os campos de um objeto
// console.log(Object.values(curso)) // --> mostra todos os valores do objeto como parametro
// console.log(Object.entries(curso)) // --> Array de chave e valores do objeto

// Object.entries(curso).forEach(par =>{
//     console.log(`${par[0]} : ${par[1]}`)
// })

// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// });


//?? Atriubto que não pode ser modificado(readonly)
// Object.defineProperty(curso, 'publicacao',{
//     enumerable: true,  //--> true chave normal, false invisivel
//     writable: false,    //-->  pode ser rescrito/ alterado
//     value: '07/08/2019' //-->  pode ser rescrito/ alterado
// })



//?? Congelar objeto para não ser modificado
// Object.freeze(curso)
// curso.nome = 'Dança da Garrafa'
// console.log(curso)


const usuarios = [
    {nome: 'Lucas Abrantes', empresa: 'Geek University'},
    {nome: 'Robert Abrantes', empresa: 'Google'},
    {nome: 'Adam Abrantes', empresa: 'IBM'},
]

console.table(usuarios) //--> torna a visualiza;'ao mais clara com o console. table